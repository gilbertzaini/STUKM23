import React, { useEffect } from "react";
import VotingForm from "../components/VotingForm";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Observer } from "../helper/observer";
import Teaser from "../components/Teaser";

const Index = () => {
  useEffect(() => {
    Observer();
  }, []);

  // Check if the user agent contains "Firefox"
  const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

  return (
    <>
      <Logo />
      <VotingForm id="votingForm" />
      {isFirefox ? null : <Teaser />}
      {/* <Teaser/> */}
    </>
  );
};

export default Index;
