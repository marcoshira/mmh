import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';
import { MenuProps } from '../../shared-types/shared-types';

export const Menu = ({ Menu_logo, Menu_text, Menu_link = [] }: MenuProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        onClick={() => setVisible(!visible)}
        aria-label="Open/Close Menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(!visible)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink text={Menu_text} srcImg={Menu_logo} />
            <NavLinks links={Menu_link} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};
