import Link from "next/link";
import { Input } from "antd";
import shortid from "shortid";
import Layout from "@components/container";
import { mainList } from "./config";
import styled from "styled-components";

const { Search } = Input;

const Main = styled.div`
  padding: ${({ theme }) => theme.paddings.xxxl};
`;

const MainSearch = styled.div`
  &input,
  &button {
    height: 2.3rem;
  }

  &input {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

const Contents = styled.div`
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeight.font500};
`;

const List = styled.div`
  margin-top: 0.5rem;
`;

const Item = styled.div`
  margin-bottom: 8px;
  width: 100%;
  text-align: left;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  a {
    width: 100%;
    padding: 20px 18px;
    display: block;
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeight.font600};
    color: ${({ theme }) => theme.colors.black};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: ${({ theme }) => theme.fontWeight.font500};
  }
`;

const MainPage = () => {
  return (
    <Layout isHeaderVisible isFooterVisible>
      <Main>
        <MainSearch>
          <Search placeholder="궁금한 정보나 병원을 찾아보세요" />
        </MainSearch>

        <Contents>
          <Title>간편한 초기 분석을 원하시나요?</Title>
          <List>
            {mainList.map((item) => (
              <Item key={shortid.generate()}>
                <Link href={item.url}>
                  <a>
                    <p>{item.title}</p>
                    <span>{item.description}</span>
                  </a>
                </Link>
              </Item>
            ))}
          </List>
        </Contents>
      </Main>
    </Layout>
  );
};

export default MainPage;
