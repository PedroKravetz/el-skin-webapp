import { LinksProps } from "../../types/types";

function FooterLinks(props: Readonly<LinksProps>) {
  return (
    <div>
      {props.link.map((link) => (
        <div key={link.id}>
          <p>{link.principal}</p>
          <ul>
            {link.subs.map((sub) => (
              <li key={sub}>{sub}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterLinks;
