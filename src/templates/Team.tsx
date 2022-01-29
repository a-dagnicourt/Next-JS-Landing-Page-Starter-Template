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

const Team = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-800 mx-auto px-3 py-6 text-center">
      <h2 className="text-6xl">Team</h2>
      <SRLWrapper options={options}>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <Image
              src="/assets/images/ange.jpg"
              width={300}
              height={300}
              alt="nope"
            />
            <h4 className="text-3xl">Member 1</h4>
          </div>
          <div>
            <Image
              src="/assets/images/anubis_preview.jpg"
              width={300}
              height={300}
              alt="nope"
            />
            <h4 className="text-3xl">Member 1</h4>
          </div>
          <div>
            <Image
              src="/assets/images/black_preview.jpg"
              width={300}
              height={300}
              alt="nope"
            />
            <h4 className="text-3xl">Member 1</h4>
          </div>
        </div>
      </SRLWrapper>
    </section>
  );
};

export { Team };
