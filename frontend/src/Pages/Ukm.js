import React, {useEffect} from "react";
import UkmPage from "../components/UkmPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Observer } from "../helper/observer";

const Ukm = () => {
  useEffect(() => {
    Observer();
  }, []);

  return (
    <div>
      <UkmPage />
    </div>
  );
};

export default Ukm;
