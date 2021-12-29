import Image from 'next/image';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const Camera = styled.div`
	height: 100%;

	.webcam {
		height: 100%;
	}
`;

const CameraButton = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;

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
		top: 6px;
		left: 6px;
		width: 55px;
		height: 55px;
		background-color: ${({ theme }) => theme.colors.black};
		border-radius: 50%;
	}
`;

const Photo = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
	z-index: 10;
`;

const videoConstraints = {
	facingMode: { exact: 'user' },
};

const WebCam = ({ handleTakePhoto, camRef, photo, width, height, cameraFormat, alt, photoWidth, photoHeight }) => {
	return (
		<>
			<Camera>
				<Webcam
					audio={false}
					ref={camRef}
					width={width}
					height={height}
					screenshotFormat={cameraFormat}
					className='webcam'
					forceScreenshotSourceSize='true'
					videoConstraints={videoConstraints}
				/>
			</Camera>
			<CameraButton>
				<button
					onClick={() => {
						handleTakePhoto();
					}}
				/>
			</CameraButton>

			<Photo>{photo && <Image src={photo} alt={alt} width={photoWidth} height={photoHeight} />}</Photo>
		</>
	);
};

export default WebCam;
