import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Paragraph, Subheading } from "react-native-paper";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  post: IPost;
}

const Post: FC<Props> = ({ post }) => {
  return (
    <View style={styles.container}>
      <Subheading style={styles.title}>{post.title}</Subheading>
      <Paragraph>{post.body}</Paragraph>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 8,
    textTransform: "capitalize",
  },
});
