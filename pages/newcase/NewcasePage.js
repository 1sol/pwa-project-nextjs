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

const CameraButtonWrap = styled.div`
	position: fixed;
	bottom: 10px;
	z-index: 10;
	width: 28rem;
	padding: 0 15px;
	${({ theme }) => theme.common.flex};
	${({ theme }) => theme.common.flexRow};
	${({ theme }) => theme.common.flexVerticalCenter};
	${({ theme }) => theme.common.flexSpaceBetween};
`;

const SaveButton = styled.div`
	a {
		font-size: ${({ theme }) => theme.fontSizes.lg};
		cursor: pointer;
	}
`;

const CameraButton = styled.div`
	position: fixed;
	left: 50%;
	transform: translate(-50%, 0);

	&:after {
		content: '';
		display: inline-block;
		width: 65px;
		height: 65px;
		border-radius: 50%;
		border: 1px solid ${({ theme }) => theme.colors.black};
		border-radius: 50%;
		z-index: 1;
	}

	button {
		position: absolute;
		top: 5px;
		left: 5px;
		width: 55px;
		height: 55px;
		background-color: ${({ theme }) => theme.colors.black};
		border-radius: 50%;
	}
`;

const AlbumButton = styled.div`
	.ant-upload.ant-upload-select-picture-card {
		width: 50px;
		height: 50px;
		border: 0;
	}

	.ant-upload-list-picture-card-container {
		width: 50px;
		height: 50px;
	}
	.ant-upload-list-picture-card .ant-upload-list-item {
		padding: 0;
	}
`;

const NewcasePage = () => {
	const router = useRouter();
	const camRef = useRef(null);
	const [photo, setPhoto] = useState('');
	const [fileList, setFileList] = useState([]);

	const handleChangeFile = ({ fileList: newFileList }) => {
		setFileList(newFileList);
	};

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
				<CameraButtonWrap>
					<AlbumButton>
						<FileAttacher fileList={fileList} onChange={handleChangeFile} maxCount={1} />
					</AlbumButton>
					<CameraButton>
						<button
							onClick={() => {
								handleTakePhoto();
							}}
						/>
					</CameraButton>
					<SaveButton>
						<a onClick={handleSavePhoto}>저장</a>
					</SaveButton>
				</CameraButtonWrap>
			</NewCase>
		</Layout>
	);
};

export default NewcasePage;
