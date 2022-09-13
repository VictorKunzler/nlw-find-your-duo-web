import { MagnifyingGlassPlus } from 'phosphor-react';

import './styles/main.css';

import LogoNlw from './assets/logo-nlw-esports.svg';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col pt-20'>
      <img src={LogoNlw} alt='Next level week logo' />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game-1.png' />
          <div className='absolute w-full pt-16 pb-4 px-4 bg-card-game-gradient bottom-0'>
            <strong className='font-bold block text-white'>League of legends</strong>
            <span className='text-sm text-zinc-300 mt-1'>4 anuncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game-3.png' />
          <div className='absolute w-full pt-16 pb-4 px-4 bg-card-game-gradient bottom-0'>
            <strong className='font-bold block text-white'>CS:GO</strong>
            <span className='text-sm text-zinc-300 mt-1'>4 anuncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game-2.png' />
          <div className='absolute w-full pt-16 pb-4 px-4 bg-card-game-gradient bottom-0'>
            <strong className='font-bold block text-white'>Dota 2</strong>
            <span className='text-sm text-zinc-300 mt-1'>4 anuncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game-6.png' />
          <div className='absolute w-full pt-16 pb-4 px-4 bg-card-game-gradient bottom-0'>
            <strong className='font-bold block text-white'>World of Warcraft</strong>
            <span className='text-sm text-zinc-300 mt-1'>4 anuncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game-5.png' />
          <div className='absolute w-full pt-16 pb-4 px-4 bg-card-game-gradient bottom-0'>
            <strong className='font-bold block text-white'>Fortinite</strong>
            <span className='text-sm text-zinc-300 mt-1'>4 anuncios</span>
          </div>
        </a>

        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src='/game-4.png' />
          <div className='absolute w-full pt-16 pb-4 px-4 bg-card-game-gradient bottom-0'>
            <strong className='font-bold block text-white'>Apex Legends</strong>
            <span className='text-sm text-zinc-300 mt-1'>4 anuncios</span>
          </div>
        </a>
      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 self-stretch flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar Anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
