import React from "react";
import { Link } from "react-router-dom";
import { myProjects } from "./Projects";

const ProjectDetails = props => {
  const paramId = props.match.params.id;
  const found = myProjects.find(el => el.id === paramId);

  return (
    <div>
      <h2>{found.name}</h2>
      <h3>Used technogologies: {found.technologies}</h3>
      <p>{found.description}</p>
      <Link to="/projects">Back</Link>
    </div>
  );
};

export default ProjectDetails;
