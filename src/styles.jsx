import styled from 'styled-components';
import avatar from './assets/img/avatar.jpg';
import { ReactSVG } from 'react-svg';

const colorText = '#3B383E';

export const Wrapper = styled.div`
  background: linear-gradient(-45deg, rgb(226, 236, 200), rgb(205, 175, 212));
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 5% 8%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  /* @media (max-width: 900px) {
    padding: 0;
  } */
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  @media (max-width: 900px) {
    font-size: 0.8rem;
  }

  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
  /* border: 1px solid wheat; */
`;
// export const ImgWrapp = styled.div`
//   max-width: 15em;
// `;
export const Avatar = styled.div`
  background-image: url(${avatar});
  width: 70%;
  aspect-ratio: 1;
  background-size: 100%;
  background-position: 55% 75%;
  border-radius: 50%;
`;
export const SVGWrapp = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2em;
`;
export const Separator = styled.div`
  background-color: ${colorText};
  height: 2em;
  width: 2px;
  margin: 0 0.7em;
`;
export const SVGLogo = styled(ReactSVG)`
  & div svg g path {
    fill: ${colorText};
  }
  max-width: 2.4em;
`;
export const SVGName = styled(ReactSVG)`
  & div svg g path {
    fill: ${colorText};
  }
  max-height: 4em;
`;
export const Title = styled.h1`
  font-size: 1.3em;
  font-weight: 400;
  margin: 1em 0;
  text-align: center;
  color: ${colorText};
`;
export const Divider = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${colorText}20;
`;
export const ButtonsWrapp = styled.section`
  display: ${(props) => (props.$firstSection ? 'grid' : 'flex')};
  /* flex-direction: ${(props) => (props.$firstSection ? 'column' : 'row')}; */
  flex-direction: ${(props) => (props.$firstSection ? '' : 'row')};
  grid-template-areas: ${(props) =>
    props.$firstSection && "'site instagram' 'site vk'"};
  width: 100%;
  gap: 0.7em;
  margin: 1em 0;
`;
export const Button = styled.a`
  width: 100%;
  min-height: 3em;
  padding: 0 1em;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.5em;
  grid-area: ${(props) =>
    props.$site
      ? 'site'
      : props.$instagram
      ? 'instagram'
      : props.$vk
      ? 'vk'
      : ''};
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  border-radius: 31px;
  background: ${(props) =>
    props.$instagram
      ? 'linear-gradient(to right, rgb(188, 42, 141), rgb(255, 126, 41));'
      : props.$vk
      ? 'rgb(87, 131, 182)'
      : props.$whatsApp
      ? 'rgb(37, 211, 102)'
      : props.$telegram
      ? 'rgb(4, 135, 217)'
      : '#c446ce'};
  box-sizing: border-box;
`;
export const SocWrapp = styled.div`
  font-size: 1.3em;
  margin: ${(props) => (props.$secondSection ? '0 auto' : '0 auto 0 0')};
  display: inline-flex;
`;
export const LinkText = styled.span`
  /* margin-right: auto; */
  text-align: center;
`;
