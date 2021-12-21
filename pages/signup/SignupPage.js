import Image from 'next/image';
import { useRouter } from 'next/router';
import shortid from 'shortid';
import { Button, Input } from 'antd';
import Layout from '@components/container';
import { skinItem } from './config';
import styled from 'styled-components';

const { Search } = Input;

const NewCase = styled.div`
	padding: ${({ theme }) => theme.paddings.xxxl};
`;

const Title = styled.h2`
	margin: 2.5rem 0 3rem 0;
	font-weight: ${({ theme }) => theme.fontWeight.font600};
	font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const Question = styled.div`
	${({ theme }) => theme.common.flex};
	${({ theme }) => theme.common.flexWrap};
`;

const Item = styled.div`
	flex-basis: 33.33333%;

	button {
		padding: 8px 15px;
		height: auto;
		margin-bottom: 6px;
		font-size: ${({ theme }) => theme.fontSizes.small};
	}
`;

const SymptomSearch = styled.div`
	margin-top: 30px;

	input {
		font-size: ${({ theme }) => theme.fontSizes.small};
	}

	input,
	button {
		height: 38px;
	}
`;

const NextStep = styled.div`
	margin: 50px 0 20px 0;

	button {
		width: 100%;
		height: 45px;
		background: ${({ theme }) => theme.colors.gray};
		border: none;
		box-shadow: none;
	}
`;

const SignupPage = () => {
	const router = useRouter();

	return (
		<Layout isHeaderVisible={false} isFooterVisible={false}>
			<NewCase>
				<button onClick={() => router.back()}>
					<Image src='/assets/icons/icon-prev.png' width='20' height='20' alt='' />
				</button>

				<Title>
					어떤 피부 증상이 <br /> 고민이신가요?
				</Title>
				<Question>
					{skinItem.map((item) => (
						<Item key={shortid.generate()}>
							<Button>{item}</Button>
						</Item>
					))}
				</Question>

				<SymptomSearch>
					<Search placeholder='증상 찾기' />
				</SymptomSearch>
				<NextStep>
					<Button type='primary'>다음</Button>
				</NextStep>
			</NewCase>
		</Layout>
	);
};

export default SignupPage;
