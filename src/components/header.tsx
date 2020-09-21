import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Title } from "react-native-paper";

import User from "./user";

const Header: FC = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>My Blog App</Title>
      <User />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingBottom: 12,
  },
  title: {
    fontWeight: "bold",
  },
});
