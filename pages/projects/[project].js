import { useRouter } from 'next/router';
/* Projects */
import Microspot from '../../data/projects/microspot.mdx';
import ObiMagazin from '../../data/projects/obi-magazin.mdx';
import Vaillant from '../../data/projects/vaillant.mdx';

const projects = {
  microspot: Microspot,
  'obi-magazin': ObiMagazin,
  vaillant: Vaillant,
};

export default () => {
  const router = useRouter();
  const { project } = router.query;
  const Content = projects[project];

  return (
    <div>
      <div className="container mx-auto p-4">
        {project && <Content />}
      </div>
    </div>
  );
}
