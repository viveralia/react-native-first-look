import React from "react";
import useSWR from "swr";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";

import Error from "../components/error";
import Header from "../components/header";
import Loader from "../components/loader";
import Post, { IPost } from "../components/post";

const Home = () => {
  const { data: posts, error, revalidate } = useSWR<IPost[]>("/posts");

  const isLoading = !posts && !error;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <ScrollView>
          {isLoading && <Loader />}
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
          {error && <Error action={{ onPress: revalidate }} />}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
});
