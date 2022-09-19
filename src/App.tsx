import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import LogoNlw from './assets/logo-nlw-esports.svg';
import GameBanner from './components/GameBanner';
import CreateAdBanner from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';

import './styles/main.css';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  });

  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col pt-20'>
      <img src={LogoNlw} alt='Next level week logo' />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu{' '}
        <span className='bg-nlw-gradient bg-clip-text text-transparent'>
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map((game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
