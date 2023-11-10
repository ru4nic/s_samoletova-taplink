import {
  Wrapper,
  Container,
  Avatar,
  SVGLogo,
  Title,
  Divider,
  Button,
  SocWrapp,
  LinkText,
  ButtonsWrapp,
  SVGName,
  SVGWrapp,
  Separator,
} from './styles';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import logo from './assets/img/logo.svg';
import name from './assets/img/logo_text.svg';

function App() {
  return (
    <Wrapper>
      <Container>
        <Avatar />
        <SVGWrapp>
          <SVGLogo src={logo} />
          <Separator />
          <SVGName src={name} />
        </SVGWrapp>
        <Title>Фотограф в Зеленограде и Москве</Title>
        <Divider $top />
        <ButtonsWrapp $firstSection>
          <Button
            $site
            href="https://my1hat.github.io/s_samoletova/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkText>Сайт</LinkText>
          </Button>
          <Button
            $instagram
            href="https://instagram.com/s_samoletova?igshid=NGVhN2U2NjQ0Yg=="
            target="_blank"
            rel="noreferrer"
          >
            <SocWrapp $secondSection>
              <FaInstagram />
            </SocWrapp>
            {/* <LinkText>Instagram</LinkText> */}
          </Button>
          <Button
            $vk
            href="https://vk.com/s_samoletova"
            target="_blank"
            rel="noreferrer"
          >
            <SocWrapp $secondSection>
              <SlSocialVkontakte />
            </SocWrapp>
            {/* <LinkText>Вконтакте</LinkText> */}
          </Button>
        </ButtonsWrapp>
        <Divider $bottom />
        <ButtonsWrapp>
          <Button
            $whatsApp
            href="https://api.whatsapp.com/send?phone=79099729995&text="
            target="_blank"
            rel="noreferrer"
          >
            <SocWrapp $secondSection>
              <FaWhatsapp />
            </SocWrapp>
          </Button>
          <Button
            $telegram
            href="https://t.me/S_Samoletova"
            target="_blank"
            rel="noreferrer"
          >
            <SocWrapp $secondSection>
              <FaTelegramPlane />
            </SocWrapp>
          </Button>
        </ButtonsWrapp>
      </Container>
    </Wrapper>
  );
}

export default App;
