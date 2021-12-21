import Link from "next/link";
import Image from "next/image";
import Layout from "@components/container";
import styles from "../StoryPage.module.scss";

const StoryInfoPage = () => {
  return (
    <Layout isHeaderVisible={false} isFooterVisible={false}>
      <div className={styles.story}>
        <div className={styles.story__title}>
          <div className={styles.btn__back}>
            <Link href="/story">
              <a>
                <Image
                  src="/assets/icons/icon-prev.png"
                  width="20"
                  height="20"
                  alt=""
                />
              </a>
            </Link>
          </div>

          <div className={styles.story__info__contents}>
            <div className={styles.story__info__img}>
              <Image
                src="/assets/images/img-example.png"
                width="200"
                height="150"
                objectFit="cover"
                layout="responsive"
                alt=""
              />
            </div>
            <h2>제목</h2>
            <div className={styles.story__info__description}>
              <p>내용</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StoryInfoPage;
