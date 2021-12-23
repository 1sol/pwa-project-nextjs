import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Analysis = styled.div`
	padding: ${({ theme }) => theme.paddings.xxxl};
`;

const AnalysisPage = (props) => {
	useState(() => {
		console.log('test', props.img);
	});

	return <Analysis>{props.img && <Image src={props.img} alt='' width='100%' height='200px' />}</Analysis>;
};

export default AnalysisPage;
