import {useRef, useState} from "react";

export function ImagePreviewer({images}) {

    const [currentImage, setCurrentImage] = useState(images[0]);
    const [autoPreview, setAutoPreview] = useState(false);
    const [autoPreviewInterval, setAutoPreviewInterval] = useState();
    const bigImageRef = useRef();
    const switchAutoPreviewIconRef = useRef();
    const progressBarRef = useRef();

    let selectedImageId = currentImage.id;
    let barWidth = 0;

    const playAutoPreview = function () {
        setAutoPreview(true);
        switchAutoPreviewIconRef.current?.classList.remove("fa-play");
        switchAutoPreviewIconRef.current?.classList.add("fa-pause");

        let i = setInterval(function () {
            barWidth += 0.5;

            if (barWidth >= 100) {
                barWidth = 0;

                if (selectedImageId >= images.length) {
                    selectImage(1, false);
                } else {
                    selectImage(selectedImageId + 1, false);
                }
            }

            progressBarRef.current.style.width = barWidth + "%";
        }, 40);
        setAutoPreviewInterval(i);
    }

    const pauseAutoPreview = function () {
        setAutoPreview(false);
        clearInterval(autoPreviewInterval);
        switchAutoPreviewIconRef.current?.classList.remove("fa-pause");
        switchAutoPreviewIconRef.current?.classList.add("fa-play");
    }

    const selectImage = (id, stopPlay) => {
        if (stopPlay) pauseAutoPreview();
        if (selectedImageId !== id) {
            setCurrentImage(images.find(img => img.id === id));
            selectedImageId = id;
        } else {
            console.log("click");
            bigImageRef.current?.click();
        }
    }

    const openImage = (image) => {

    }

    return (
        <div className="vertical product-image-container" style={{width: "40%"}}>

            {/* big preview image  */}
            <div className="vertical image-container">
                <img className="product-image" ref={ref => bigImageRef.current = ref} src={currentImage?.src} alt=""/>
            </div>

            <div className="horizontal">
                <div onClick={autoPreview ? pauseAutoPreview : playAutoPreview} className="toggle-auto-image">
                    <i className="toggle-auto-image-icon fa fa-pause"
                       ref={ref => switchAutoPreviewIconRef.current = ref}></i>
                </div>
                <div className="loading-bar-container">
                    <div className="loading-bar" ref={ref => progressBarRef.current = ref}></div>
                </div>
            </div>

            {/* image row  */}
            <div className="horizontal container product-image-row">
                {images.map(({id, src}) =>
                    <img key={"img" + id}
                         className={"product-image-item " + (id === currentImage?.id ? "selected" : "")}
                         onClick={() => selectImage(id, true)}
                         src={src}
                         alt=""/>
                )}
            </div>

        </div>
    );
}
