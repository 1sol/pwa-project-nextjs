import { useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const Camera = styled.div``;

const CameraButton = styled.div``;

const Photo = styled.div``;

const WebCam = () => {
	const webcamRef = useRef(null);
	const [image, setImage] = useState('');

	const handleTakePhoto = useCallback(() => {
		const imgSrc = webcamRef.current.getScreenshot();
		setImage(imgSrc);
	}, [webcamRef]);

	return (
		<>
			<Camera>
				<Webcam audio={false} ref={webcamRef} width={200} height={200} screenshotFormat='image/jpeg' />
			</Camera>
			<CameraButton>
				<button
					onClick={(e) => {
						e.preventDefault();
						handleTakePhoto();
					}}
				>
					take a picture
				</button>
			</CameraButton>

			<Photo>{image && <Image src={image} alt='' width={200} height={200} />}</Photo>
		</>
	);
};

export default WebCam;
