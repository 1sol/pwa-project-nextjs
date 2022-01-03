import { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Image from 'next/image';

const CameraPhoto = () => {
	const [image, setImage] = useState('');

	const handleTakePhoto = (dataUri) => {
		setImage(dataUri);
	};

	return (
		<>
			<Camera
				onTakePhoto={(dataUri) => {
					handleTakePhoto(dataUri);
				}}
				muted
			/>
			{image && <Image src={image} alt='' width={200} height={200} />}
		</>
	);
};

export default CameraPhoto;
