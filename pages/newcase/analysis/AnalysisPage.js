import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Steps } from 'antd';
import Layout from '@components/container';

const Analysis = styled.div`
	padding: ${({ theme }) => theme.paddings.xxxl};
	margin-top: 10rem;
`;

const ProgressState = styled.div`
	${({ theme }) => theme.common.flexAlignCenter};
	.ant-steps-vertical {
		width: fit-content;
	}
	.ant-steps-item {
		padding-bottom: 3rem;
	}
`;

const AnalysisPage = () => {
	const { Step } = Steps;
	const router = useRouter();

	const handleMoveCompletePage = () => {
		router.push('/newcase/analysis/state');
	};

	return (
		<Layout isHeaderVisible={false} isFooterVisible={false}>
			<Analysis>
				<ProgressState>
					<Steps direction='vertical' size='small' current={1}>
						<Step title='Start' description='분석 시작' />
						<Step title='In Progress' description='분석 진행중' />
						<Step title='Finished' description='분석 완료' onStepClick={handleMoveCompletePage} />
					</Steps>
				</ProgressState>
			</Analysis>
		</Layout>
	);
};

export default AnalysisPage;
