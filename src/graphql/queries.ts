import { gql } from 'graphql-request';

export const GRAPHQL_QUERY = gql`
  query GET_MMH {
    mmh {
      data {
        attributes {
          Menu {
            Menu_text
            Menu_logo {
              data {
                attributes {
                  url
                }
              }
            }
            Menu_link {
              id
              Text
              Url
              NewTab
            }
          }
          About {
            Title
            Content
            Image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          Skills {
            Title
            Skill {
              id
              Skill_name
              Skill_description
              Skill_logo {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          Projects {
            Title
            Project {
              id
              Project_title
              Project_description
              Project_link
              Project_image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
          Cursos {
            Title
            Curso {
              id
              Title
              Certificado_url
            }
          }
          Footer {
            Footer_text
            Footer_link {
              id
              Link_profile
              Link_url
              Logo {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
