import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Form, Input, Checkbox, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Layout } from '@components/container';
import styled from 'styled-components';

const Login = styled.div`
	padding: ${({ theme }) => theme.paddings.xxxl};
`;

const Title = styled.h2`
	margin: 4rem 0;
	font-weight: ${({ theme }) => theme.fontWeight.font600};
	font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const LoginForm = styled.div`
	form > div {
		margin-bottom: ${({ theme }) => theme.margins.base};
	}

	.login__form {
		&__input {
			padding: 7px 10px;
			input {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}
		}

		&__checkbox {
			margin-right: 20px;
			span {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}
		}

		&__find_auth {
			font-size: ${({ theme }) => theme.fontSizes.small};
			color: ${({ theme }) => theme.colors.black};
			&::after {
				content: '';
				display: inline-block;
				vertical-align: middle;
				width: 1px;
				height: 11px;
				margin: 0 7px;
				background: ${({ theme }) => theme.colors.gray};
			}

			&:last-child::after {
				display: none;
			}
		}

		&__confirm {
			width: 100%;
			height: 40px;
			margin-top: 10px;
			background: ${({ theme }) => theme.colors.gray};
			border: none;
			box-shadow: none;
		}

		&__signup {
			font-size: ${({ theme }) => theme.fontSizes.small};
		}
	}
`;

const EmailLoginPage = () => {
	const router = useRouter();

	return (
		<Layout isHeaderVisible={false} isFooterVisible={false}>
			<Login>
				<button onClick={() => router.back()}>
					<Image src='/assets/icons/icon-prev.png' width='20' height='20' alt='' />
				</button>

				<Title>로그인</Title>
				<LoginForm>
					<Form name='normal_login' initialValues={{ remember: true }}>
						<Form.Item name='id' rules={[{ required: true, message: 'Please input your Username!' }]}>
							<Input className='login__form__input' prefix={<UserOutlined />} placeholder='아이디' size='large' />
						</Form.Item>
						<Form.Item name='password' rules={[{ required: true, message: 'Please input your Password!' }]}>
							<Input
								className='login__form__input'
								prefix={<LockOutlined />}
								type='password'
								placeholder='비밀번호'
								size='large'
							/>
						</Form.Item>
						<Form.Item>
							<Form.Item name='remember' valuePropName='checked' noStyle>
								<Checkbox className='login__form__checkbox'>아이디 저장</Checkbox>
							</Form.Item>

							<Link href='/auth/findEmail'>
								<a className='login__form__find_auth'>아이디 찾기</a>
							</Link>
							<Link href='/auth/findPw'>
								<a className='login__form__find_auth'>비밀번호 찾기</a>
							</Link>
						</Form.Item>

						<Form.Item>
							<Button type='primary' htmlType='submit' size='large' className='login__form__confirm'>
								로그인
							</Button>
						</Form.Item>
					</Form>
				</LoginForm>
			</Login>
		</Layout>
	);
};

export default EmailLoginPage;
