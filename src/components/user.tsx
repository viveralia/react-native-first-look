import React, { FC } from "react";
import { Avatar } from "react-native-paper";

import useUser from "../hooks/use-user";
import { getInitials } from "../utils";

const User: FC = () => {
  const { user } = useUser();

  return <Avatar.Text size={32} label={getInitials(user?.name)} />;
};

export default User;
