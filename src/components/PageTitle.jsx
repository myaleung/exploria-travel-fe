import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title + " | Exploria";
  }, [location, title]);

  return null;
};

export default PageTitle;