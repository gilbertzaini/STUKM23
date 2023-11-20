import React, {useEffect} from "react";
import VotingForm from "../components/VotingForm";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Observer } from "../helper/observer";

const Index = () => {
  useEffect(() => {
    Observer();
  }, []);

  return (
    <>
      <Logo />
      <VotingForm id="votingForm" />
    </>
  );
};

export default Index;
