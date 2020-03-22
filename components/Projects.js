import ProjectThumbnail from './ProjectThumbnail';
import Container from './Container';
import { projects } from '../data/projects/projects';

export default () => (
  <Container className="mt-40 sm:mt-56">
    <div className="mt-4 md:mt-8 grid grid-rows-3 lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
      {Object.values(projects).map(project => (
        <ProjectThumbnail
          key={project.meta.slug}
          href="/projects/[project]"
          as={`projects/${project.meta.slug}`}
        >
          2
        </ProjectThumbnail>
      ))}
    </div>
  </Container>
);
