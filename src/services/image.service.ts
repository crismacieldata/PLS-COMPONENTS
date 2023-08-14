const ImageService = {
	convetImage: (imgUrl: any, callback: any) => {
		const image = new Image();
		image.crossOrigin = 'anonymous';
		image.onload = () => {
			const canvas = document.createElement('canvas');
			const ctx: any = canvas.getContext('2d');
			canvas.height = image.naturalHeight;
			canvas.width = image.naturalWidth;
			ctx.drawImage(image, 0, 0);
			const dataUrl = canvas.toDataURL();
			callback && callback(dataUrl);
		};
		image.src = imgUrl;
	}
};

export default ImageService;
