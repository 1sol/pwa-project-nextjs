import Image from "next/image";
import { useRouter } from "next/router";
import shortid from "shortid";
import { Select } from "antd";
import Layout from "@components/container";
import { historyList } from "./config";
import styled from "styled-components";

const { Option } = Select;

const History = styled.div`
  padding: ${({ theme }) => theme.paddings.xxxl};
`;

const Title = styled.div`
  ${({ theme }) => theme.common.flexAlignCenter};

  span {
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.base};
  }

  .btn__back {
    height: 20px;
  }
`;

const Sort = styled.div`
  ${({ theme }) => theme.common.flex};
  ${({ theme }) => theme.common.flexEnd};
  margin: 2.5rem 0 0.5rem 0;

  .sort__select {
    span {
      font-size: ${({ theme }) => theme.fontSizes.small};
      color: ${({ theme }) => theme.colors.darkGray2};
    }
  }
`;

const Contents = styled.div`
  .contents__list {
    margin-bottom: 2rem;

    h3 {
      font-size: ${({ theme }) => theme.fontSizes.small};
      font-weight: ${({ theme }) => theme.fontWeight.font600};
    }

    p {
      margin-bottom: 3px;
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }
`;

const HistoryPage = () => {
  const router = useRouter();

  return (
    <Layout isHeaderVisible={false} isFooterVisible={false}>
      <History>
        <Title>
          <div className="btn__back">
            <button onClick={() => router.back()}>
              <Image
                src="/assets/icons/icon-prev.png"
                width="20"
                height="20"
                alt=""
              />
            </button>
          </div>
          <span>분석 기록</span>
        </Title>

        <Sort>
          <Select
            defaultValue="최신순"
            bordered={false}
            className="sort__select"
          >
            <Option value="최신순">최신순</Option>
            <Option value="오래된순">오래된순</Option>
          </Select>
        </Sort>

        <Contents>
          {historyList.map((item) => (
            <div key={shortid.generate()} className="contents__list">
              <h3>{item.date}</h3>
              <Image src={item.img} width="500" height="220" alt="" />
              <p>{item.description1}</p>
              <p>{item.description2}</p>
              <p>{item.description3}</p>
            </div>
          ))}
        </Contents>
      </History>
    </Layout>
  );
};

export default HistoryPage;
