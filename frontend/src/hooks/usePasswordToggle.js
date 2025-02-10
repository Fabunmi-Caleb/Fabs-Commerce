import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";

const usePasswordToggle = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setIsPasswordVisible((prev) => !prev);
  };

  return { isPasswordVisible, togglePasswordVisibility, IoEye, IoMdEyeOff };
};

export {usePasswordToggle};
