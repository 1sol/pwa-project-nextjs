import Link from "next/link";
import shortid from "shortid";
import styled from "styled-components";
import { footerItems } from "./config";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  height: 7rem;
  ${({ theme }) => theme.common.screenWidth};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray2};
  padding: ${({ theme }) => theme.paddings.xxxl};
  background: ${({ theme }) => theme.colors.white};
`;

const FooterInner = styled.div`
  ${({ theme }) => theme.common.flex};
`;

const Category = styled.div`
  width: calc(100% / 3);
  ${({ theme }) => theme.common.flexAlignCenter};

  a {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        {footerItems.map((item) => (
          <Category key={shortid.generate()}>
            <Link href={item.url}>
              <a>{item.name}</a>
            </Link>
          </Category>
        ))}
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;
