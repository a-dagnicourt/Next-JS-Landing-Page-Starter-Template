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
    iconColor: '#7F1D1D',
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
    <section
      id="gallery"
      className="flex flex-col justify-center items-center bg-gray-900 mx-auto px-3 pt-24 pb-40 text-center"
    >
      <div className="flex justify-start w-full mb-12">
        <h2 className=" text-6xl text-left font-title border-r-8 border-red-900 pr-8 ml-8">
          Gallery
        </h2>
      </div>
      <SRLWrapper options={options}>
        <div className="grid grid-cols-3 gap-2">
          <Image
            src="/assets/images/ange.jpg"
            width={300}
            height={300}
            alt="nope"
            className="hover:contrast-125 cursor-pointer"
          />
          <Image
            src="/assets/images/anubis_preview.jpg"
            width={300}
            height={300}
            alt="nope"
            className="hover:contrast-125 cursor-pointer"
          />
          <Image
            src="/assets/images/black_preview.jpg"
            width={300}
            height={300}
            alt="nope"
            className="hover:contrast-125 cursor-pointer"
          />
          <Image
            src="/assets/images/black_preview.jpg"
            width={300}
            height={300}
            alt="nope"
            className="hover:contrast-125 cursor-pointer"
          />
          <Image
            src="/assets/images/ange.jpg"
            width={300}
            height={300}
            alt="nope"
            className="hover:contrast-125 cursor-pointer"
          />
          <Image
            src="/assets/images/anubis_preview.jpg"
            width={300}
            height={300}
            alt="nope"
            className="hover:contrast-125 cursor-pointer"
          />
          <Image
            src="/assets/images/ange.jpg"
            width={300}
            height={300}
            alt="nope"
            className="hover:contrast-125 cursor-pointer"
          />
          <Image
            src="/assets/images/anubis_preview.jpg"
            width={300}
            height={300}
            alt="nope"
            className="hover:contrast-125 cursor-pointer"
          />
          <Image
            src="/assets/images/black_preview.jpg"
            width={300}
            height={300}
            alt="nope"
            className="hover:contrast-125 cursor-pointer"
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
