import React from "react";

import ProjectsList from "./ProjectsList";
import ProjectDetails from "./ProjectDetails";

function StartProjects() {
  const projects = [
    {
      title: "Chess",
      description:
        "A chess game made with React and Typescript, with an AI that uses the minimax algorithm with alpha-beta pruning.",
      link: "google.com",
    },
    {
      title: "Twitter Clone",
      description:
        "A twitter clone made with React and Typescript, with a Node.js backend and a MongoDB database.",
      link: "google.com",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A tic tac toe game made with React and Typescript, with multiplayer functionality and communication using websockets.",
      link: "google.com",
    },
  ];
  const [selectedProject, setSelectedProject] = React.useState(projects[0]);

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-slate-900 text-amber-100">
      <div className="flex justify-center items-center gap-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[80px] select-none">Projects</h1>
          <ProjectsList
            projects={projects}
            setSelectedProject={setSelectedProject}
          />
        </div>
        <ProjectDetails selectedProject={selectedProject} />
      </div>
    </div>
  );
}

export default StartProjects;
