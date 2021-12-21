import Layout from '@components/container';
import styled from 'styled-components';
import { CameraPhoto } from '@components/presentational';

const NewCase = styled.div`
	padding: ${({ theme }) => theme.paddings.xxxl};
`;

const NewcasePage = () => {
	return (
		<Layout isHeaderVisible={false} isFooterVisible={false}>
			<NewCase>
				<CameraPhoto />
			</NewCase>
		</Layout>
	);
};

export default NewcasePage;
