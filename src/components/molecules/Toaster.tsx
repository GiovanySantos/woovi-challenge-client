import { useContext } from "react";
import Content from "../atoms/Content";
import { AlertContext } from "@/contexts/AlertContext";

const Toaster = () => {
  const { alertContentKey, showToaster, type } = useContext(AlertContext);

  const getToasterColorByType = () => {
    if (type === "success") return "bg-dark_green";
    if (type === "danger") return "bg-red-500";
    if (type === "warning") return "bg-amber-500";
  };

  return (
    <div
      className={`fixed rounded-md font-normal top-5 right-5 text-white p-4 transition-transform shadow-lg ${getToasterColorByType()} ${
        showToaster ? "transform translate-y-0" : "transform -translate-y-20"
      }`}>
      <Content contentKey={alertContentKey} />
    </div>
  );
};

export default Toaster;

