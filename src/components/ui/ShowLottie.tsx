'use client';
import { Player } from '@lottiefiles/react-lottie-player';

type Props = {
  path: any;
  className?: string;
};

const ShowLottie = ({ path, className = '' }: Props) => {
  if (typeof document !== 'undefined') {
    return (
      <div className={`max-w-sm md:max-w-md ${className}`}>
        <Player autoplay loop src={path}></Player>
      </div>
    );
  }
  return <></>;
};

export default ShowLottie;
