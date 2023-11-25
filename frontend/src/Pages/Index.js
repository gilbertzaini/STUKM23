import React, {useEffect} from "react";
import VotingForm from "../components/VotingForm";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Teaser from "../components/Teaser";
import { Observer } from "../helper/observer";

const Index = () => {
  useEffect(() => {
    Observer();
  }, []);

  return (
    <>
      <Logo />
      <VotingForm id="votingForm" />
      <Teaser />
    </>
  );
};

export default Index;
