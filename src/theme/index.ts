import { keyframes } from 'styled-components';

export { THEME_COLORS } from './colors';
export { THEME_SIZES } from './sizes';

export const spacing = (num: number) => `${4 * Number(num)}px`;

export const fade = keyframes`
  from {
    opacity: 0;
  }
`;
