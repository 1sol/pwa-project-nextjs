import { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '@components/container';
import { WebCam } from '@components/presentational';
import AnalysisPage from './analysis';

const NewCase = styled.div`
	padding: ${({ theme }) => theme.paddings.xxxl};
	width: 100%;

	video {
		width: 100%;
	}
`;

const NewcasePage = () => {
	const camRef = useRef(null);
	const [photo, setPhoto] = useState('');
	const [dataUrl, setDataUrl] = useState('');

	const handleTakePhoto = useCallback(() => {
		const imgSrc = camRef.current.getScreenshot();
		setPhoto(imgSrc);
	}, [camRef]);

	const handleSavePhoto = async () => {
		try {
			const { data } = await axios({
				method: 'post',
				url: 'http://10.3.35.196:10010/api/image',
				data: photo,
				headers: {
					'Content-Type': 'image/jpeg',
				},
			});
			setDataUrl(data.data.path);
		} catch (error) {
			return Promise.reject(error);
		}
	};

	return (
		<Layout isHeaderVisible={false} isFooterVisible={false}>
			<NewCase>
				<WebCam
					camRef={camRef}
					handleTakePhoto={handleTakePhoto}
					photo={photo}
					cameraWidth='100%'
					cameraHeight='200px'
					cameraFormat='image/jpeg'
					alt=''
					photoWidth='300px'
					photoHeight='200px'
				/>

				<button type='button' onClick={handleSavePhoto}>
					save
				</button>
				{dataUrl && <AnalysisPage img={dataUrl} />}
			</NewCase>
		</Layout>
	);
};

export default NewcasePage;
