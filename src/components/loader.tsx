import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  message?: string;
}

const Loader: FC<Props> = ({ message = "Loading..." }) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
