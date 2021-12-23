import Image from 'next/image';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const Camera = styled.div``;

const CameraButton = styled.div``;

const Photo = styled.div``;

const WebCam = ({
	handleTakePhoto,
	camRef,
	photo,
	cameraWidth,
	cameraHeight,
	cameraFormat,
	alt,
	photoWidth,
	photoHeight,
}) => {
	return (
		<>
			<Camera>
				<Webcam audio={false} ref={camRef} width={cameraWidth} height={cameraHeight} screenshotFormat={cameraFormat} />
			</Camera>
			<CameraButton>
				<button
					onClick={() => {
						handleTakePhoto();
					}}
				>
					take a picture
				</button>
			</CameraButton>

			<Photo>{photo && <Image src={photo} alt={alt} width={photoWidth} height={photoHeight} />}</Photo>
		</>
	);
};

export default WebCam;
