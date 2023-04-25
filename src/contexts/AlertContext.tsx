import { createContext } from "react";

interface IAlertContext {
  alertContentKey: string;
  setAlertContentKey?: React.Dispatch<React.SetStateAction<string>>;
  showToaster: boolean;
  setShowToaster?: React.Dispatch<React.SetStateAction<boolean>>;
  type: "success" | "danger" | "warning";
  setType?: React.Dispatch<
    React.SetStateAction<"success" | "danger" | "warning">
  >;
}

export const AlertContext = createContext<IAlertContext>({
  alertContentKey: "",
  setAlertContentKey: () => {},
  showToaster: false,
  setShowToaster: () => {},
  type: "success",
  setType: () => {},
});

