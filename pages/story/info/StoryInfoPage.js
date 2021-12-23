import Link from 'next/link';
import Image from 'next/image';
import shortid from 'shortid';
import Layout from '@components/container';
import styles from '../StoryPage.module.scss';
import { storySkinInfo } from '../config';

const StoryInfoPage = () => {
	return (
		<Layout isHeaderVisible={false} isFooterVisible={false}>
			<div className={styles.story}>
				<div className={styles.story__top}>
					<div className={styles.story__title}>
						<div className={styles.btn__back}>
							<Link href='/story'>
								<a>
									<Image src='/assets/icons/icon-prev.png' width='20' height='20' alt='' />
								</a>
							</Link>
						</div>
					</div>
				</div>

				<div className={styles.story__skin}>
					<div className={styles.story__skin__title}>
						<h2>아토피 정보</h2>
					</div>
					<div className={styles.story__skin__list}>
						{storySkinInfo.map((item) => (
							<div key={shortid.generate()} className={styles.story__skin__item}>
								<Link href={item.url}>
									<a>
										<div className={styles.story__skin__item_img}>
											<Image src={item.img} width='200' height='150' alt='' />
										</div>
										<p>{item.title}</p>
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

export default StoryInfoPage;
