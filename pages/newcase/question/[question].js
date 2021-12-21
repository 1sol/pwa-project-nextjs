import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import shortid from "shortid";
import { Button, Checkbox } from "antd";
import Layout from "@components/container";
import { QuestionItem } from "../config";
import styled from "styled-components";

const Question = styled.div`
  padding: ${({ theme }) => theme.paddings.xxxl};
`;

const Title = styled.h3`
  margin: 2.5rem 0 3rem 0;
  font-weight: ${({ theme }) => theme.fontWeight.font600};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const Select = styled.div`
  ${({ theme }) => theme.common.flex};
  ${({ theme }) => theme.common.flexColumn};
`;

const List = styled.div`
  margin-left: 0;
  margin-bottom: 20px;

  .select__item {
    span {
      border-radius: 50%;
    }
  }
`;

const NextStep = styled.div`
  margin-top: 5rem;

  .next {
    width: 100%;
    ${({ theme }) => theme.common.flexAlignCenter};
    height: 45px;
    background: ${({ theme }) => theme.colors.gray};
    border: none;
    box-shadow: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  .count {
    margin-left: 5px;
  }
`;

const QuestionPage = () => {
  const router = useRouter();

  return (
    <Layout isHeaderVisible={false} isFooterVisible={false}>
      <Question>
        <button onClick={() => router.back()}>
          <Image
            src="/assets/icons/icon-prev.png"
            width="20"
            height="20"
            alt=""
          />
        </button>

        <Title>해당되는 증상을 모두 선택해주세요.</Title>
        <Select>
          {QuestionItem.map((item) => (
            <List key={shortid.generate()}>
              <Checkbox className="select__item">{item}</Checkbox>
            </List>
          ))}
        </Select>

        <NextStep>
          <Link href="/newcase">
            <a className='next'>
              다음 <span className="count">1/7</span>
            </a>
          </Link>
        </NextStep>
      </Question>
    </Layout>
  );
};

export default QuestionPage;
