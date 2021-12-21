import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const HeaderContainer = styled.header`
  ${({ theme }) => theme.common.flex};
  ${({ theme }) => theme.common.flexSpaceBetween};
  ${({ theme }) => theme.common.flexVerticalCenter};
  padding-top: ${({ theme }) => theme.paddings.xxxl};
  padding-left: ${({ theme }) => theme.paddings.xxxl};
  padding-right: ${({ theme }) => theme.paddings.xxxl};
`;

const HeaderRight = styled.div`
  ${({ theme }) => theme.common.flex};

  .user {
    width: 20px;
    height: 20px;
  }
`;

const Logo = styled.div``;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <Link href="/">
          <a>
            <Image
              src="/assets/common/logo.png"
              width="100"
              height="29"
              alt=""
            />
          </a>
        </Link>
      </Logo>

      <HeaderRight>
        <Link className="user" href="/login">
          <a>
            <Image
              src="/assets/icons/icon-user.png"
              width="20"
              height="20"
              alt=""
            />
          </a>
        </Link>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
