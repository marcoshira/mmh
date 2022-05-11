import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FooterLink, FooterLinkProps } from '.';

const props: FooterLinkProps = {
  title: 'any',
};

describe('<FooterLink />', () => {
  it('should render', () => {
    renderTheme(<FooterLink {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
