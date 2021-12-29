import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import shortid from 'shortid';
import { ShareAltOutlined, HeartOutlined } from '@ant-design/icons';
import { Layout } from '@components/container';
import styles from '../HospitalPage.module.scss';
import { hospitalInfo } from '../config';

const HospitalInfoPage = () => {
	const router = useRouter();

	return (
		<Layout isHeaderVisible={false} isFooterVisible={false}>
			<div className={styles.hospital}>
				<div className={styles.hospital__top}>
					<div className={styles.hospital__title}>
						<div className={styles.btn__back}>
							<button onClick={() => router.back()}>
								<Image src='/assets/icons/icon-prev.png' width='20' height='20' alt='' />
							</button>
						</div>
						<span>병원정보</span>
					</div>
				</div>

				<div className={styles.hospital__contents}>
					<div className={styles.hospital__list}>
						{hospitalInfo.map((item) => (
							<div key={shortid.generate()} className={styles.hospital__list__item}>
								<div className={styles.hospital__list__item_title}>
									<h2>{item.name}</h2>
									<div className={styles.hospital__list__item_buttons}>
										<ul>
											<li>
												<Link href='/'>
													<a>
														<ShareAltOutlined />
													</a>
												</Link>
											</li>
											<li>
												<Link href='/'>
													<a>
														<HeartOutlined />
													</a>
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className={styles.hospital__list__item_contents}>
									<p className={styles.description}>
										<span>{item.rating}</span>
										방문자리뷰 {item.reviewCount}
									</p>
									<p className={styles.address}>
										{item.address.map((add) => (
											<span key={shortid.generate()}>{add}</span>
										))}
									</p>
									<div className={styles.time}>
										<h4>진료시간</h4>
										<p>
											{item.detailBusinessHours.map((time) => (
												<span key={shortid.generate()}>{time}</span>
											))}
										</p>
									</div>
									<p className={styles.tag}>
										{item.tag.map((tag) => (
											<span key={shortid.generate()}>{tag}</span>
										))}
									</p>
								</div>

								<div className={styles.hospital__list__doctor}>
									<div className={styles.hospital__list__doctor_profile}></div>
									<h4>{item.doctorName}</h4>
									<p>{item.doctorInfo}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default HospitalInfoPage;
