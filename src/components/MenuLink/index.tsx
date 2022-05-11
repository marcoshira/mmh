import { MenuLinkProps } from '../../shared-types/shared-types';
import * as Styled from './styles';

export const MenuLink = ({ Text, Url, NewTab }: MenuLinkProps) => {
  const target = NewTab ? '_blank' : '_self';
  return (
    <Styled.Container href={Url} target={target}>
      {Text}
    </Styled.Container>
  );
};
