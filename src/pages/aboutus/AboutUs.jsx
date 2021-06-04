import React from "react";
import "./AboutUs.scss";
import { CardPresentation } from "../../components/card-presentation";
import jcPicture from "../../assets/img/jc.jpg";
import leoPicture from "../../assets/img/leo.jpg";
import enriquePicture from "../../assets/img/enrique.jpeg";
import jorgePicture from "../../assets/img/jorge.jpg";

export const AboutUs = () => {
  return (
    <main className="about-us">
      <section className="about-us__container">
        <h2 className="about-us__container--title">Equipo técnico</h2>
        <CardPresentation
          profileImg={leoPicture}
          name="Leonardo Rincón"
          jobTitle="Frontend Developer"
          twitterProfile="https://twitter.com/LeoBotache7"
          linkedinProfile="https://www.linkedin.com/in/leo-rincon/"
        />
        <CardPresentation
          profileImg={jcPicture}
          name="Juan Camilo Garcés"
          jobTitle="Frontend Developer"
          twitterProfile="https://twitter.com/Camilo_GarcesV"
          linkedinProfile="https://www.linkedin.com/in/juancamilogarcesviveros/"
        />
        <CardPresentation
          profileImg={enriquePicture}
          name="Enrique Pérez"
          jobTitle="Data Scientist/Backend Developer"
          twitterProfile="https://twitter.com/EnriqueePerez"
          linkedinProfile="https://www.linkedin.com/in/enriqueeperez/"
        />
        <CardPresentation
          profileImg={jorgePicture}
          name="Jorge Alberto Delgadillo Alonso"
          jobTitle="Data Scientist/Backend Developer"
          twitterProfile="https://twitter.com/jorge64311416"
          linkedinProfile="https://www.linkedin.com/in/jorge-alberto-delgadillo-alonso-7b58501aa/"
        />
      </section>
    </main>
  );
};
