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
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 mx-auto px-3 py-6 text-center ">
      <SRLWrapper options={options}>
        <div className="grid grid-cols-3 gap-2">
          <Image
            src="/assets/images/temp/54.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/temp/ganesh-tuskers.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/temp/king-tusker.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/temp/samurai-suit-tusker.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/temp/Tuskers_Basket_01.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/temp/Tuskers_Doctor_01.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/temp/tuskers-mixed-08.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/temp/tuskers-solana-01.jpg"
            width={300}
            height={300}
            alt="nope"
          />
          <Image
            src="/assets/images/temp/tutantusker.jpeg"
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
