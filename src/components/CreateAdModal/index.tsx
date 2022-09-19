import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from 'phosphor-react';

import { Input } from '../Form/input';

interface Game {
  id: string;
  title: string;
}

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  });

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

      <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[670px] shadow-lg shadow-black-25'>
        <Dialog.Title className='text-3xl font-black'>
          Publique um anúncio
        </Dialog.Title>
        <form className='mt-8 flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='game' className='font-semibold'>
              Qual o game?
            </label>

            <select
              id='game'
              className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
              defaultValue=''
            >
              <option disabled value=''>
                Selecione o game que deseja jogar
              </option>

              {games.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.title}
                </option>
              ))}
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-semibold' htmlFor='name'>
              Seu nome (ou nickname)
            </label>
            <Input
              id='name'
              type='text'
              placeholder='Como te chamam dentro do game?'
            />
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor='yearsPlaying'>
                Joga há quantos anos?
              </label>
              <Input
                id='yearsPlaying'
                type='number'
                placeholder='Tudo bem ser ZERO'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor='discord'>
                Qual seu discord?
              </label>
              <Input id='discord' type='text' placeholder='Usuario#0000' />
            </div>
          </div>

          <div className='flex gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='font-semibold' htmlFor='weekDays'>
                Quando costuma jogar?
              </label>

              <ToggleGroup.Root
                type='multiple'
                className='flex gap-1'
                onValueChange={setWeekDays}
              >
                <ToggleGroup.Item
                  value='0'
                  title='Domingo'
                  className={`text-[12px] w-10 h-10 rounded font-semibold	 ${
                    weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='1'
                  title='Segunda-Feira'
                  className={`text-[12px] w-10 h-10 rounded font-semibold	 ${
                    weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='2'
                  title='Terça-Feira'
                  className={`text-[12px] w-10 h-10 rounded font-semibold	 ${
                    weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='3'
                  title='Quarta-Feira'
                  className={`text-[12px] w-10 h-10 rounded font-semibold	 ${
                    weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='4'
                  title='Quinta-Feira'
                  className={`text-[12px] w-10 h-10 rounded font-semibold	 ${
                    weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='5'
                  title='Sexta-Feira'
                  className={`text-[12px] w-10 h-10 rounded font-semibold	 ${
                    weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='6'
                  title='Sábado'
                  className={`text-[12px] w-10 h-10 rounded font-semibold	 ${
                    weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>

            <div className='flex flex-col gap-2 flex-1'>
              <label className='font-semibold' htmlFor='hourStart'>
                Qual horário do dia?
              </label>
              <div className='grid grid-cols-2 gap-2'>
                <Input id='hourStart' type='time' placeholder='De' />
                <Input id='hourEnd' type='time' placeholder='Até' />
              </div>
            </div>
          </div>

          <label className='mt-2 flex gap-2 text-sm items-center'>
            <Checkbox.Root className='w-6 h-6 rounded bg-zinc-900 p-1'>
              <Checkbox.Indicator>
                <Check className='w-4 h-4 text-emerald-400' />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className='mt-4 flex justify-end gap-4'>
            <Dialog.Close
              type='button'
              className='bg-zinc-500 px-5 h-12 font-semibold rounded-md hover:bg-zinc-600'
            >
              Cancelar
            </Dialog.Close>
            <button
              type='submit'
              className='bg-violet-500 px-5 h-12 font-semibold rounded-md gap-3 flex items-center hover:bg-violet-600'
            >
              <GameController />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
