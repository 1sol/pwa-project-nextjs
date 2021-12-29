import { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styled from 'styled-components';
import { FileAttacher, Layout } from '@components/container';
import { WebCam } from '@components/presentational';

const NewCase = styled.div`
	position: relative;
	height: 100%;
	overflow: hidden;
`;

const SaveButton = styled.div`
	position: absolute;
	bottom: 55px;
	right: 15px;
	z-index: 10;

	a {
		font-size: ${({ theme }) => theme.fontSizes.lg};
		cursor: pointer;
	}
`;

const AlbumButton = styled.div`
	position: absolute;
	bottom: 55px;
	left: 15px;
	z-index: 10;
`;

const NewcasePage = ({ imgUrl }) => {
	const router = useRouter();
	const camRef = useRef(null);
	const [photo, setPhoto] = useState('');

	const handleTakePhoto = useCallback(() => {
		const imgSrc = camRef.current.getScreenshot();
		setPhoto(imgSrc);
	}, [camRef]);
	const handleSavePhoto = async (e) => {
		e.preventDefault();

		try {
			const data = await axios({
				method: 'POST',
				url: '/api/hello',
				data: photo,
				headers: {
					'Content-Type': 'image/jpeg',
				},
			});

			localStorage.setItem('imageUrl', data.data.data.path);

			if (data) {
				router.push('/newcase/analysis');
			}
		} catch (error) {
			return Promise.reject(error);
		}
	};

	return (
		<Layout isHeaderVisible={false} isFooterVisible={false}>
			<NewCase>
				<AlbumButton>
					<FileAttacher />
				</AlbumButton>
				<WebCam
					camRef={camRef}
					handleTakePhoto={handleTakePhoto}
					photo={photo}
					width='auto'
					height='100%'
					cameraFormat='image/jpeg'
					alt=''
					photoWidth='50px'
					photoHeight='50px'
				/>

				<SaveButton>
					<a onClick={handleSavePhoto}>저장</a>
				</SaveButton>
			</NewCase>
		</Layout>
	);
};

export default NewcasePage;
