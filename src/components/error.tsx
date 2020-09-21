import React, { FC } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

export interface IAction {
  title?: string;
  onPress: () => void;
}

interface Props {
  message?: string;
  action?: IAction;
}

const Error: FC<Props> = ({
  message = "An unexpected error has ocurred",
  action,
}) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      {action && (
        <Button title={action.title || "Try again"} onPress={action.onPress} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Error;
