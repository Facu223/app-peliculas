import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };