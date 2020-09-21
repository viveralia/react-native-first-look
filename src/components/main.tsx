import React from "react";
import useSWR from "swr";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";

import Error from "./error";
import Header from "./header";
import Loader from "./loader";
import Post, { IPost } from "./post";

const Main = () => {
  const { data: posts, error, revalidate } = useSWR<IPost[]>("/posts");

  const isLoading = !posts && !error;

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header />
        {isLoading && <Loader />}
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
        {error && <Error action={{ onPress: revalidate }} />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
});
