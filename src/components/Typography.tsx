import styled from 'styled-components';

interface TypographyProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'title' | 'span' | 'p';
  weight?: string;
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
  size?: string;
  clr?: string;
  padding?: string;
  margin?: string;
  textalign?: 'center' | 'left' | 'right';
  font?: 'var(--font-primary)' | 'var(--font-secondary)';
  cursorType?: 'pointer';
}

export const Typography = (props: TypographyProps) => {
  const { variant = 'p' } = props;

  switch (variant) {
    case 'title':
      return <StyledTitle {...props}>{props.children}</StyledTitle>;
    case 'span':
      return <StyledSpan {...props}>{props.children}</StyledSpan>;
    default:
      return <StyledTypography {...props}>{props.children}</StyledTypography>;
  }
};

const StyledTypography = styled('p')<TypographyProps>`
  ${({ weight }) => weight && `font-weight: ${weight}`};
  ${({ transform }) => transform && `text-transform: ${transform}`};
  ${({ size }) => size && `font-size: ${size}`};
  ${({ clr }) => clr && `color: ${clr}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ textalign }) => textalign && `text-align: ${textalign}`};
  ${({ font }) => font && `font-family: ${font}`};
  ${({ cursorType }) => cursorType && `cursor: ${cursorType}`};
`;

const StyledTitle = styled('h1')<TypographyProps>`
  ${({ weight }) => weight && `font-weight: ${weight}`};
  ${({ transform }) => transform && `text-transform: ${transform}`};
  ${({ size }) => size && `font-size: ${size}`};
  ${({ clr }) => clr && `color: ${clr}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ textalign }) => textalign && `text-align: ${textalign}`};
  ${({ font }) => font && `font-family: ${font}`};
  ${({ cursorType }) => cursorType && `cursor: ${cursorType}`};
`;

const StyledSpan = styled('span')<TypographyProps>`
  ${({ weight }) => weight && `font-weight: ${weight}`};
  ${({ transform }) => transform && `text-transform: ${transform}`};
  ${({ size }) => size && `font-size: ${size}`};
  ${({ clr }) => clr && `color: ${clr}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ textalign }) => textalign && `text-align: ${textalign}`};
  ${({ font }) => font && `font-family: ${font}`};
  ${({ cursorType }) => cursorType && `cursor: ${cursorType}`};
`;
