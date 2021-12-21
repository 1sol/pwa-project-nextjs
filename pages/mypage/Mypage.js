import Link from "next/link";
import shortid from "shortid";
import Layout from "@components/container";
import { mypageItem } from "./config";
import styled from "styled-components";

const Mypage = styled.div`
  padding-top: ${({ theme }) => theme.paddings.xxxl};
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.font600};
`;

const Profile = styled.div`
  padding: 0 ${({ theme }) => theme.paddings.xxxl};
  margin-top: 40px;
  ${({ theme }) => theme.common.flex};
  ${({ theme }) => theme.common.flexVerticalCenter};
`;

const Photo = styled.div`
  width: 50px;
  height: 50px;
  margin-right: ${({ theme }) => theme.margins.xl};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 50%;
`;

const Info = styled.div`
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

const List = styled.div`
  margin-top: 20px;
  padding: 0 ${({ theme }) => theme.paddings.xxxl};

  .item {
    padding: 7px 0;

    a {
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }
`;

const MyPage = () => {
  return (
    <Layout isHeaderVisible={false} isFooterVisible>
      <Mypage>
        <Title>마이페이지</Title>
        <Profile>
          <Photo></Photo>
          <Info>
            <p>홍길동</p>
            <p>ai2u@ai2u.co.kr</p>
          </Info>
        </Profile>

        <List>
          {mypageItem.map((item) => (
            <div key={shortid.generate()} className="item">
              <Link href={item.url}>
                <a>{item.title}</a>
              </Link>
            </div>
          ))}
        </List>
      </Mypage>
    </Layout>
  );
};

export default MyPage;
