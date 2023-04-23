import { IUser } from "@/types/interfaces";
import { createContext } from "react";

interface IUserContext {
  userData?: IUser;
  setUserData?: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export const UserContext = createContext<IUserContext>({
  userData: undefined,
  setUserData: () => {},
});

