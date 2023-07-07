interface ProjectDetailsProps {
  selectedProject: {
    title: string;
    description: string;
    link: string;
  };
}

function ProjectDetails({ selectedProject }: ProjectDetailsProps) {
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center"
      draggable="false"
    >
      <div className="flex flex-col items-center bg-amber-100 text-slate-900 rounded-lg p-8 w-[900px] h-[520px] mt-[120px]">
        <h1 className="text-[50px]">{selectedProject.title}</h1>
        <p className="text-[20px] mb-auto">{selectedProject.description}</p>
        <p>
          More at: &nbsp;
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noreferrer"
            className="text-[20px] hover:underline"
          >
            {selectedProject.link}
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectDetails;
