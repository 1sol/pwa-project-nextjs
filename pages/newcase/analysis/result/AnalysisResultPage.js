import { useEffect, useState } from 'react';
import Image from 'next/image';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import { Layout } from '@components/container';

const Analysis = styled.div`
	padding: ${({ theme }) => theme.paddings.xxxl};
	margin-top: 10rem;
`;

const AnalysisResult = styled.div``;

const ResultText = styled.div`
	p {
		margin-top: 1rem;
		font-size: 15px;
	}
`;

const AnalysisResultPage = () => {
	const [dataUrl, setDataUrl] = useState('');

	useEffect(() => {
		const data = localStorage.getItem('imageUrl');
		setDataUrl(data);
	}, []);

	return (
		<Layout isHeaderVisible={false} isFooterVisible={false}>
			<Analysis>
				{dataUrl && (
					<AnalysisResult>
						<Image src={dataUrl} alt='' width='100%' height='100%' />
						<ResultText>
							<h3>분석 완료 되었습니다.</h3>
							<p>
								<strong>홍길동</strong>님은 <br /> 1. 아토피 피부염 <br /> 2. 두드러기 <br />로 예상됩니다. <br />
							</p>
							<p>자세한 내용은 병원을 내원해주세요.</p>
						</ResultText>
					</AnalysisResult>
				)}
			</Analysis>
		</Layout>
	);
};

export default withRouter(AnalysisResultPage);
