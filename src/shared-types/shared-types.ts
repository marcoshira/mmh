export type MenuProps = {
  Menu_text: string;
  Menu_logo: StrapiImage;
  Menu_link: MenuLinkProps[];
};

export type StrapiImage = {
  data: StrapiImageData;
};

export type StrapiImageData = {
  attributes?: StrapiImageAttributes;
};

export type StrapiImageAttributes = {
  url: string;
};

export type MenuLinkProps = {
  id: string;
  Text: string;
  Url: string;
  NewTab: boolean;
};

export type AboutProps = {
  Title: string;
  Content: string;
  Image: StrapiImage;
};

export type SkillsProps = {
  Title: string;
  Skill: SkillProps[];
};

export type SkillProps = {
  id: string;
  Skill_name: string;
  Skill_description?: string;
  Skill_logo: StrapiImage;
};

export type ProjectsProps = {
  Title: string;
  Project: ProjectProps[];
};

export type ProjectProps = {
  id: string;
  Project_title: string;
  Project_description: string;
  Project_link: string;
  Project_image: StrapiImage;
};

export type CursosProps = {
  Title: string;
  Curso: CursoProps[];
};

export type CursoProps = {
  id: string;
  Title: string;
  Certificado_url: string;
};

export type FooterProps = {
  Footer_text: string;
  Footer_link: FooterLinkProps[];
};

export type FooterLinkProps = {
  id: string;
  Link_profile: string;
  Link_url?: string;
  Logo: StrapiImage;
};
