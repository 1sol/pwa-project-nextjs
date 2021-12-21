import Link from "next/link";
import Image from "next/image";
import Layout from "@components/container";
import styled from "styled-components";

const Login = styled.div`
  padding: ${({ theme }) => theme.paddings.xxxl};
`;

const Title = styled.h2`
  margin: 4rem 0 8rem 0;
  font-weight: ${({ theme }) => theme.fontWeight.font600};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-align: center;
`;

const SnsLogin = styled.div`
  margin-top: 100px;

  p {
    ${({ theme }) => theme.common.flex};
    ${({ theme }) => theme.common.flexVerticalCenter};
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.darkGray};
    flex-basis: 100%;

    &::before,
    &::after {
      content: "";
      flex-grow: 1;
      background: ${({ theme }) => theme.colors.darkGray};
      height: 1px;
    }

    &::before {
      margin-right: ${({ theme }) => theme.margins.base};
    }

    &::after {
      margin-left: ${({ theme }) => theme.margins.base};
    }
  }

  .sns__item {
    width: 100%;
    height: 43px;
    ${({ theme }) => theme.common.flexAlignCenter};
    background: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 6px;
    border: none;
    box-shadow: none;
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const SignupArea = styled.div`
  margin-top: ${({ theme }) => theme.margins.xxl};

  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    text-align: center;
  }

  .signup__link {
    margin-left: 7px;
    font-weight: ${({ theme }) => theme.fontWeight.font600};
  }
`;

const LoginPage = () => {
  return (
    <Layout isHeaderVisible={false} isFooterVisible={false}>
      <Login>
        <Link href="/">
          <a>
            <Image
              src="/assets/icons/icon-prev.png"
              width="20"
              height="20"
              alt=""
            />
          </a>
        </Link>

        <Title>
          집에서도 간편히 <br /> 피부과를 이용하세요.
        </Title>

        <SnsLogin>
          <p>간편 로그인</p>
          <Link href="">
            <a className="sns__item">카카오로 시작하기</a>
          </Link>
          <Link href="">
            <a className="sns__item">네이버로 시작하기</a>
          </Link>
          <Link href="">
            <a className="sns__item">구글로 시작하기</a>
          </Link>
          <Link href="/login/email">
            <a className="sns__item">이메일로 시작하기</a>
          </Link>
        </SnsLogin>

        <SignupArea>
          <p>
            AI2U에 처음 오셨나요?
            <Link href="/signup">
              <a className="signup__link">회원가입</a>
            </Link>
          </p>
        </SignupArea>
      </Login>
    </Layout>
  );
};

export default LoginPage;
