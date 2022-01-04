import Image from 'next/image';
import Webcam from 'react-webcam';
import styled from 'styled-components';

const Camera = styled.div`
	height: 100%;
	.webcam {
		height: 100%;
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

const WebCam = ({ camRef, photo, width, height, cameraFormat, alt, photoWidth, photoHeight }) => {
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
					style={{ transform: 'scaleX(-1)' }}
				/>
			</Camera>

			<Photo>{photo && <Image src={photo} alt={alt} width={photoWidth} height={photoHeight} />}</Photo>
		</>
	);
};

export default WebCam;
