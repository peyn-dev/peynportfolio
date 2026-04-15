import React, {useState, useEffect} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import GithubProfileCard from "../../components/githubProfileCard/GithubProfileCard";

export default function Profile() {
  const [prof, setrepo] = useState([]);
  function setProfileFunction(array) {
    setrepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setProfileFunction(response.data.user);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );
            setProfileFunction(null);
            openSource.showGithubProfile = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    prof &&
    typeof prof === "object"
  ) {
    return <GithubProfileCard prof={prof} key={prof.id} />;
  } else {
    return <Contact />;
  }
}
