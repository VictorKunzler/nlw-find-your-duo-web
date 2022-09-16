interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export default function GameBanner({
  bannerUrl,
  title,
  adsCount,
}: GameBannerProps) {
  return (
    <a href='' className='relative rounded-lg overflow-hidden'>
      <img src={bannerUrl} />
      <div className='absolute w-full pt-16 pb-4 px-4 bg-card-game-gradient bottom-0'>
        <strong className='font-bold block text-white'>{title}</strong>
        <span className='text-sm text-zinc-300 mt-1'>
          {adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
