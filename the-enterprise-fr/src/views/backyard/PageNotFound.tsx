import LottiePlayer from 'react-lottie-player';
import PageNotFoundAnimation from '../../assets/lotties/page-not-found-animation.json';

function PageNotFound() {
  return (
    <div className='flex w-full h-full justify-center'>
      <LottiePlayer
        play
        loop
        animationData={PageNotFoundAnimation}
      ></LottiePlayer>
    </div>

  );
}

export default PageNotFound;
