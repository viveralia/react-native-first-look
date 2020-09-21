import useSWR from "swr";

import { getRandomUserId } from "../utils";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface IUseUser {
  user: IUser | undefined;
  isLoading: boolean;
  error: Error;
}

const useUser = (): IUseUser => {
  const randomUserEndpoint = `/users/${getRandomUserId()}`;

  const { data: user, error } = useSWR<IUser>(randomUserEndpoint);

  return {
    user,
    isLoading: !user && !error,
    error,
  };
};

export default useUser;
