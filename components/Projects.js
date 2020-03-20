import ProjectThumbnail from './ProjectThumbnail';
import { projects } from '../data/projects/projects';

export default () => (
  <div className="container mx-auto p-4 mt-40 sm:mt-56">
    {/*
      <h2 className="w-full text-center mb-4 text-lg md:text-xl text-black uppercase font-bold tracking-wide">
        Projects
      </h2>
      <hr className="border-t-2 border-black" />
    */}
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
  </div>
);
