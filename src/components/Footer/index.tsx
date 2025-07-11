import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import tiktok from "../../assets/tiktok.png";
import twitter from "../../assets/twitter.png";
import whatsapp from "../../assets/whatsapp.png";
import FooterLinks from "../FooterLinks";
import { links } from "../../data/links";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #F5F5F5;
  padding: 2rem;
  border-top: 1px solid #eee;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  img {
    width: 24px;
    height: 24px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <img src={facebook} alt="facebook logo" />
        <img src={github} alt="github logo" />
        <img src={instagram} alt="instagram logo" />
        <img src={linkedin} alt="linkedin logo" />
        <img src={tiktok} alt="tiktok logo" />
        <img src={twitter} alt="twitter logo" />
        <img src={whatsapp} alt="whatsapp logo" />
      </SocialIcons>
      <FooterLinks link={links} />
    </FooterContainer>
  );
}

export default Footer;
