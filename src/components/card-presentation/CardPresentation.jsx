import React from "react";
import "./CardPresentation.scss";

export const CardPresentation = ({
  profileImg,
  name,
  jobTitle,
  twitterProfile,
  linkedinProfile,
}) => {
  return (
    <article className="card-presentation">
      <figure className="card-presentation__image-card">
        <img src={profileImg} alt="" />{" "}
      </figure>
      <p className="card-presentation__title-name">{name}</p>
      <p className="card-presentation__title-job-title">{jobTitle}</p>
      <div className="card-presentation__container-icons">
        <span className="card-presentation__container-icons-linkedin-icon">
          <a href={linkedinProfile} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </span>
        <span className="card-presentation__container-icons-twitter-icon">
          <a href={twitterProfile} target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </span>
      </div>
    </article>
  );
};
