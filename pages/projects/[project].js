import { useRouter } from "next/router";
import { projects } from "../../data/projects/projects";

export default () => {
  const router = useRouter();
  const { project } = router.query;
  let ProjectPageContent = null;

  if (project && projects[project]) {
    ProjectPageContent = projects[project].component;
  }

  return (
    <div className="container mx-auto p-4">
      {project && projects[project] && <ProjectPageContent />}
    </div>
  );
};
