import { useState, useEffect } from "react";

const preLoadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);

    img.onerror = img.onabort = () => reject(src);

    img.src = src;
  });
};

const useImagePreloader = (imgList) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  useEffect(() => {
    let isCancelled = false;
    const effect = async () => {
      if (isCancelled) return;
      const imagesPromiseList = [];
      for (const i of imgList) {
        imagesPromiseList.push(preLoadImage(i));
      }
      await Promise.all(imagesPromiseList);
      if (isCancelled) return;
      setImagesPreloaded = true;
    };
    effect();
    return () => (isCancelled = true);
  }, [imgList]);
  return { imagesPreloaded };
};

export default useImagePreloader;
