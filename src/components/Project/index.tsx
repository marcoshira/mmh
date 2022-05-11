import { ProjectProps } from '../../shared-types/shared-types';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const ProjectElement = ({
  Project_description,
  Project_image,
  Project_link,
  Project_title,
}: ProjectProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="medium">{Project_title}</Heading>
      <a href={Project_link} target="_blank" rel="noreferrer">
        <img src={Project_image.data.attributes.url} />
      </a>
      <Styled.TextWrapper>
        <span>{Project_description}</span>
        <br />
        <a href={Project_link} target="_blank" rel="noreferrer">
          Confira
        </a>
      </Styled.TextWrapper>
    </Styled.Wrapper>
  );
};
