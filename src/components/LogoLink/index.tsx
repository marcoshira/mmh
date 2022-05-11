import * as Styled from './styles';
import { Heading } from '../Heading';
import { StrapiImage } from '../../shared-types/shared-types';

export type LogoLinkProps = {
  text: string;
  srcImg: StrapiImage;
};

export const LogoLink = ({ text, srcImg }: LogoLinkProps) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href="/" target="_self">
        {srcImg.data ? (
          <img src={srcImg.data.attributes.url} alt={text} />
        ) : (
          text
        )}
      </Styled.Container>
    </Heading>
  );
};
