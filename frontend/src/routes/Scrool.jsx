import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//import { useHistory } from "react-router-dom";

const ScrollToTopOnRouteChange = () => {
const pathname = useLocation()

  useEffect(() => {
 
      window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, [pathname]);
   
};

export default ScrollToTopOnRouteChange;
