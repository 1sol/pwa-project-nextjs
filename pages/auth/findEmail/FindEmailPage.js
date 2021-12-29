import Link from 'next/link';
import Image from 'next/image';
import { Form, Input, Button } from 'antd';
import { Layout } from '@components/container';
import styles from '../AuthPage.module.scss';

const FindEmailPage = () => {
	return (
		<Layout isHeaderVisible={false} isFooterVisible={false}>
			<div className={styles.auth}>
				<div className={styles.btn__back}>
					<Link href='/login'>
						<a>
							<Image src='/assets/icons/icon-prev.png' width='20' height='20' alt='' />
						</a>
					</Link>
				</div>

				<div className={styles.auth__title}>
					<h2>이메일 찾기</h2>
					<p>
						휴대폰 번호 인증은 본인확인 절차이며, 다른 용도로 사용되지 않습니다. 회원정보에 등록한 휴대폰 번호와 입력한
						휴대폰 번호가 같아야 인증번호를 받을 수 있습니다.
					</p>
				</div>
				<div className={styles.auth__form}>
					<Form layout='vertical'>
						<Form.Item label='이름' name='name'>
							<Input placeholder='이름을 입력해주세요.' />
						</Form.Item>
						<Form.Item label='휴대폰 번호' name='mobile'>
							<Input placeholder='휴대폰 번호를 입력해주세요.' />
						</Form.Item>
						<Form.Item label='인증 번호' name='certificationNumber'>
							<Input placeholder='인증 번호를 입력해주세요.' />
						</Form.Item>
					</Form>
				</div>

				<div className={styles.auth__confirm}>
					<Button block size='large' type='primary'>
						확인
					</Button>
				</div>
			</div>
		</Layout>
	);
};

export default FindEmailPage;
