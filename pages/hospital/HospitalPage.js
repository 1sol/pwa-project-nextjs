import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import shortid from "shortid";
import { Input, Select, Button } from "antd";
import {
  AimOutlined,
  ShareAltOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import Layout from "@components/container";
import { hospitalDatas } from "./config";
import styles from "./HospitalPage.module.scss";

const { Search } = Input;
const { Option } = Select;

const Hospital = () => {
  const router = useRouter();

  return (
    <Layout isHeaderVisible={false} isFooterVisible={false}>
      <div className={styles.hospital}>
        <div className={styles.hospital__top}>
          <div className={styles.hospital__title}>
            <button onClick={() => router.back()}>
              <Image
                src="/assets/icons/icon-prev.png"
                width="20"
                height="20"
                alt=""
              />
            </button>
            <span>병원찾기</span>
          </div>
        </div>

        <div className={styles.hospital__contents}>
          <div className={styles.hospital__search__wrap}>
            <div className={styles.hospital__search__input}>
              <Search
                placeholder="동, 병원명 검색"
                suffix={<AimOutlined className={styles.icon_location} />}
              />
            </div>
            <div className={styles.hospital__search__filter}>
              <Select defaultValue="거리순" className={styles.filter_item}>
                <Option value="popularity">인기순</Option>
                <Option value="accuracy">정확도순</Option>
              </Select>
              <Button shape="round">진료중</Button>
              <Button shape="round">전문의</Button>
            </div>
          </div>

          <div className={styles.hospital__list}>
            {hospitalDatas.list.map((item) => (
              <div
                key={shortid.generate()}
                className={styles.hospital__list__item__wrap}
              >
                <Link href={`/hospital/info/${item.id}`}>
                  <a>
                    <div className={styles.hospital__list__item}>
                      <div className={styles.hospital__list__item_title}>
                        <h2>{item.name}</h2>
                        <div className={styles.hospital__list__item_buttons}>
                          <ul>
                            <li>
                              <button>
                                <ShareAltOutlined />
                              </button>
                            </li>
                            <li>
                              <button>
                                <HeartOutlined />
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={styles.hospital__list__item_contents}>
                        <p className={styles.info}>
                          <span>{item.state}</span>
                          {item.businessHours}
                        </p>
                        <p className={styles.description}>
                          <span>{item.rating}</span>
                          방문자리뷰 {item.reviewCount}
                        </p>
                        <p className={styles.tag}>
                          {item.tag.map((tag) => (
                            <span key={shortid.generate()}>{tag}</span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hospital;
