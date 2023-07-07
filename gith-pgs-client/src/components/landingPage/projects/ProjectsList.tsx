interface ProjectsListProps {
  projects: {
    title: string;
    description: string;
    link: string;
  }[];
  setSelectedProject: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      link: string;
    }>
  >;
}

function ProjectsList({ projects, setSelectedProject }: ProjectsListProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      {projects.map((project) => (
        <div
          key={project.title}
          draggable="false"
          className="bg-slate-800 w-[500px] h-[150px] rounded-lg my-4 flex justify-center items-center hover:bg-slate-700 transition-all cursor-pointer select-none"
          onClick={() => setSelectedProject(project)}
        >
          <h1 className="text-amber-100 text-[30px]">{project.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
