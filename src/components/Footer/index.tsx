import facebook from "../../assets/facebook.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import tiktok from "../../assets/tiktok.png";
import twitter from "../../assets/twitter.png";
import whatsapp from "../../assets/whatsapp.png";
import FooterLinks from "../FooterLinks";
import { links } from "../../data/links";

function Footer() {
  return (
    <div>
      <img src={facebook} alt="facebook logo" />
      <img src={github} alt="github logo" />
      <img src={instagram} alt="instagram logo" />
      <img src={linkedin} alt="linkedin logo" />
      <img src={tiktok} alt="tiktok logo" />
      <img src={twitter} alt="twitter logo" />
      <img src={whatsapp} alt="whatsapp logo" />
      <FooterLinks link={links}/>
    </div>
  );
}

export default Footer;
