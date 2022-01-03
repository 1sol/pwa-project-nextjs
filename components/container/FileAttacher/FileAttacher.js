import React from 'react';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import 'antd/lib/modal/style';
import 'antd/lib/slider/style';

const FileAttacher = ({ fileList, onChange, maxCount }) => {
	const onPreview = async (file) => {
		let src = file.url;
		if (!src) {
			src = await new Promise((resolve) => {
				const reader = new FileReader();
				reader.readAsDataURL(file.originFileObj);
				reader.onload = () => resolve(reader.result);
			});
		}
		const image = new Image();
		image.src = src;
		const imgWindow = window.open(src);
		imgWindow.document.write(image.outerHTML);
	};

	return (
		<ImgCrop rotate>
			<Upload listType='picture-card' maxCount={maxCount} fileList={fileList} onChange={onChange} onPreview={onPreview}>
				<UploadOutlined />
			</Upload>
		</ImgCrop>
	);
};

export default FileAttacher;
