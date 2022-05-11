import * as Styled from './styles';
import { Menu } from '../../components/Menu';
import { About } from '../../components/About';
import { Skills } from '../../components/Skills';
import { Footer } from '../../components/Footer';
import { Projects } from '../../components/Projects';
import { Cursos } from '../../components/Cursos';
import {
  MenuProps,
  AboutProps,
  SkillsProps,
  ProjectsProps,
  CursosProps,
  FooterProps,
} from '../../shared-types/shared-types';

export type HomeProps = {
  attributes: Attributes;
};

export type Attributes = {
  Menu: MenuProps;
  About: AboutProps;
  Skills: SkillsProps;
  Projects: ProjectsProps;
  Cursos: CursosProps;
  Footer: FooterProps;
};

export function Home({ attributes }: HomeProps) {
  return (
    <Styled.Wrapper>
      <Menu {...attributes.Menu} />
      <About {...attributes.About} />
      <Skills {...attributes.Skills} />
      <Projects {...attributes.Projects} />
      <Cursos {...attributes.Cursos} />
      <Footer {...attributes.Footer} />
    </Styled.Wrapper>
  );
}
