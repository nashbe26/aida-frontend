import React from "react";
import UserCard from "../components/card-desc/card-demo";
import CardFinal from "../components/card-front-up/card-img";
import Card from "../components/cards/card";
import Header from "../components/header/header";
import IntroSection from "../components/intro-section/intro-section";

const HomePage = () =>{

    return(
        <>
        <Header></Header>
        <IntroSection></IntroSection>
        <Card></Card>
        <UserCard></UserCard>
        <CardFinal></CardFinal>
        </>
    )

}

export default HomePage;