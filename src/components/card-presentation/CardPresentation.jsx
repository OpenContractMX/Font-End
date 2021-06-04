import React from "react";
import "./CardPresentation.scss";

export const CardPresentation = ({
  profileImg,
  name,
  jobTitle,
  twitterProfile,
  linkedinProfile,
}) => {
<<<<<<< HEAD
  // const { profileImg, name, jobTitle, twitterProfile, linkedinProfile } = this.props;

=======
>>>>>>> d0e9e101bbb00a358b3850d4d15a80d4ae7e1905
  return (
    <article className="card-presentation">
      <figure className="card-presentation__image-card">
        <img src={profileImg} alt="" />{" "}
      </figure>
      <p className="card-presentation__title-name">{name}</p>
      <p className="card-presentation__title-job-title">{jobTitle}</p>
      <div className="card-presentation__container-icons">
        <span className="card-presentation__container-icons-linkedin-icon">
<<<<<<< HEAD
          <a href={linkedinProfile} target="_blank">
=======
          <a href={linkedinProfile}>
>>>>>>> d0e9e101bbb00a358b3850d4d15a80d4ae7e1905
            <i className="fab fa-linkedin-in"></i>
          </a>
        </span>
        <span className="card-presentation__container-icons-twitter-icon">
<<<<<<< HEAD
          <a href={twitterProfile} target="_blank">
=======
          <a href={twitterProfile}>
>>>>>>> d0e9e101bbb00a358b3850d4d15a80d4ae7e1905
            <i className="fab fa-twitter"></i>
          </a>
        </span>
      </div>
    </article>
  );
};
