import styled from "styled-components";
import { LinksProps } from "../../types/types";

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1000px;
  margin: 0 auto;
`;

const LinkSection = styled.div`
  .link-title {
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
    text-decoration: underline;
  }

  ul {
    list-style-type: none;
  }

  li {
    margin-bottom: 0.5rem;
    color: #666;
    font-size: 0.9rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function FooterLinks(props: Readonly<LinksProps>) {
  return (
    <LinksContainer>
      {props.link.map((link) => (
        <LinkSection key={link.id}>
          {link.principal === "Sobre a AL SKIN" ? (
            <a href="/sobre">
              <p className="link-title">{link.principal}</p>
            </a>
          ) : (
            <p className="link-title">{link.principal}</p>
          )}

          <ul>
            {link.subs.map((sub) => (
              <li key={sub}>- {sub}</li>
            ))}
          </ul>
        </LinkSection>
      ))}
    </LinksContainer>
  );
}

export default FooterLinks;
