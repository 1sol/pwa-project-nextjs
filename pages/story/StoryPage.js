import Link from "next/link";
import Image from "next/image";
import shortid from "shortid";
import Layout from "@components/container";
import { skinSkinList } from "./config";
import styled from "styled-components";

const Story = styled.div`
  padding: ${({ theme }) => theme.paddings.xxxl};
`;

const StorySkin = styled.div`
  .title {
    width: 100%;
    padding: 0;
    ${({ theme }) => theme.common.flex};
    ${({ theme }) => theme.common.flexVerticalCenter};
    ${({ theme }) => theme.common.flexSpaceBetween};
    text-align: left;
    color: ${({ theme }) => theme.colors.black};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  h2 {
    margin: 40px 0 5px 0;
  }
`;

const Icon = styled.div`
  ${({ theme }) => theme.common.flex};
  ${({ theme }) => theme.common.flexVerticalCenter};
`;

const List = styled.div`
  ${({ theme }) => theme.common.flex};
  ${({ theme }) => theme.common.flexSpaceBetween};
  ${({ theme }) => theme.common.flexWrap};
`;

const Item = styled.div`
  width: calc(100% / 2 - 5px);
  margin-bottom: 30px;

  p {
    max-width: 75%;
    font-weight: ${({ theme }) => theme.fontWeight.font600};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  &:last-child {
    margin-right: 0;
  }
`;

const ItemImg = styled.div`
  margin-bottom: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray2};
  border-radius: 5px;
`;

const story = () => {
  return (
    <Layout isHeaderVisible isFooterVisible>
      <Story>
        <StorySkin>
          <Link href="/story/info">
            <a className="title">
              <span>
                <strong>김00</strong> 님을 위한 아토피 정보
              </span>
              <Icon>
                <Image
                  src="/assets/icons/icon-next.png"
                  width="15"
                  height="15"
                  alt=""
                />
              </Icon>
            </a>
          </Link>

          <List>
            {skinSkinList.map((item) => (
              <Item key={shortid.generate()}>
                <Link href={item.url}>
                  <a>
                    <ItemImg>
                      <Image src={item.img} width="200" height="150" alt="" />
                    </ItemImg>
                    <p>{item.title}</p>
                  </a>
                </Link>
              </Item>
            ))}
          </List>
        </StorySkin>
      </Story>
    </Layout>
  );
};

export default story;
