import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Start each page at the top instead of keeping the previous page's scroll position.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
