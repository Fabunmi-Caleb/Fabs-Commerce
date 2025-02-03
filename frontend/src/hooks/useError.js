import { useState } from "react";

const useError = () => {
  const [error, setError] = useState(null);
  return { error, setError };
};

export { useError };
