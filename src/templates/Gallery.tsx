import Image from 'next/image';
// import ImageGallery from 'react-image-gallery';
import { SRLWrapper } from 'simple-react-lightbox';

const options = {
  settings: {
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    autoplaySpeed: 1500,
    transitionSpeed: 900,
    hideControlsAfter: 3000,
    slideAnimationType: 'slide',
  },
  buttons: {
    backgroundColor: '#000000',
    iconColor: 'rgb(255, 0, 0)',
    slideAnimationType: false,
    showDownloadButton: false,
    showFullscreenButton: false,
  },
  caption: { showCaption: false },
  thumbnails: {
    thumbnailsOpacity: 0.8,
  },
};

const Gallery = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-900 mx-auto px-3 py-6 text-center ">
      <h2 className="text-6xl">Gallery</h2>
      <SRLWrapper options={options}>
        <div className="grid grid-cols-3 gap-2">
          <Image
            src="/assets/images/ange.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/anubis_preview.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/black_preview.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/black_preview.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/ange.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/anubis_preview.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/ange.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/anubis_preview.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/black_preview.jpg"
            width={300}
            height={300}
            alt="nope"
          />
        </div>
      </SRLWrapper>
      {/* <ImageGallery
        items={items}
        thumbnailPosition={'left'}
        showPlayButton={false}
        autoPlay={true}
        slideDuration={300}
        slideInterval={1300}
        slideOnThumbnailOver={true}
      /> */}
    </section>
  );
};

export { Gallery };
