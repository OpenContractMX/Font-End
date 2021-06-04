import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { CardPresentation } from "./";

it("[render content `component / CarPresentation`]", () => {
  const profileImg = "img",
    name = "name",
    jobTitle = "text",
    twitterProfile = "link",
    linkedinProfile = "link";
  const { asFragment } = render(
    <CardPresentation
      profileImg={profileImg}
      name={name}
      jobTitle={jobTitle}
      twitterProfile={twitterProfile}
      linkedinProfile={linkedinProfile}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
