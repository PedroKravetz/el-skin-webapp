"use client";

import FooterLinks from "../FooterLinks";
import { links } from "../../data/links";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
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
        <img src="/assets/facebook.png" alt="facebook logo" />
        <img src="/assets/github.png" alt="github logo" />
        <img src="/assets/instagram.png" alt="instagram logo" />
        <img src="/assets/linkedin.png" alt="linkedin logo" />
        <img src="/assets/tiktok.png" alt="tiktok logo" />
        <img src="/assets/twitter.png" alt="twitter logo" />
        <img src="/assets/whatsapp.png" alt="whatsapp logo" />
      </SocialIcons>
      <FooterLinks link={links} />
    </FooterContainer>
  );
}

export default Footer;
