import { useRouter } from 'next/router';
import { projects } from '../../data/projects/projects';

export default function Project() {
  const router = useRouter();
  const { project } = router.query;
  let ProjectPageContent = null;

  if (project && projects[project]) {
    ProjectPageContent = projects[project].component;
  }

  return (
    <div className="container mx-auto p-4 mt-12">
      <div className="uppercase font-bold text-gray-500">Project summary</div>
      {project && projects[project] && <ProjectPageContent />}
    </div>
  );
}
