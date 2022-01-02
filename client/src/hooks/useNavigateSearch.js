import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

export const useNavigateSearch = () => {
    const navigate = useNavigate();
    return (pathname, params) =>
      navigate({ pathname, search: `?${createSearchParams(params)}` });
  };