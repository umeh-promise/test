import ChevronLeftIcon from '@/app/assets/icons/ChevronLeftIcon';
import Logo from '@/app/assets/icons/Logo';
import SaveIcon from '@/app/assets/icons/SaveIcon';
import Button from '@/app/components/Button';
import Image from 'next/image';

import dog_image from '@/app/assets/images/dog.png';

const dogs = [dog_image, dog_image, dog_image, dog_image, dog_image];

export default function DashboardDogInfo() {
  return (
    <div className='basis-full md:basis-[55.5rem] overflow-hidden lg:flex flex-col lg:pl-[5.7rem] pr-[2px] gap-[3.7rem]'>
      <div className='py-[3rem]'>
        <Logo />
      </div>

      <div className='flex items-center justify-between pb-[2rem] border-b border-grey-100 pr-[4rem]'>
        <ChevronLeftIcon className='cursor-pointer' />
        <div className='flex items-center gap-[7px]'>
          <Button size='small' variation='secondary'>
            <SaveIcon />
            <span>Save</span>
          </Button>

          <Button size='small' variation='primary'>
            Button
          </Button>
        </div>
      </div>

      <div className='flex flex-col gap-[2.7rem] pr-[4rem] border-r border-r-grey-100 py-[1rem]'>
        <div>
          <h4 className='text-grey-500 text-xl font-semibold leading-2.5 mb-[9px]'>
            Happy Dogs
          </h4>
          <p className='text-grey-500 text-xs font-normal leading-2.5'>
            Madrid Spain
          </p>
        </div>

        <div className='flex items-center gap-[3rem] overflow-x-auto shrink-0 w-full'>
          {dogs.slice(0, 2).map((dog, index) => (
            <figure className='w-[15.59rem] h-[15.36rem] shrink-0' key={index}>
              <Image
                src={dog}
                alt='dog-image'
                className='h-full w-full object-cover'
              />
            </figure>
          ))}
          <figure
            className='w-[15.59rem] h-[15.36rem] flex items-center rounded-md justify-center
            border border-grey-50 shrink-0'
          >
            <span className='text-grey-400 text-xs font-semibold leading-1.5'>
              + {dogs.slice(2).length} more
            </span>
          </figure>
        </div>

        <div>
          <h5 className='text-grey-500 text-base font-medium leading-2.5 mb-[4.7px]'>
            Description
          </h5>
          <p className='text-grey-400 text-xs leading-1.5'>
            The notion of dogs laughing is often associated with the infectious
            joy and playfulness they bring into our lives. While dogs don&apos;t
            express laughter in the same way humans do, their happiness
            manifests through various behaviors like wagging tails, barks, and
            exuberant play.
          </p>
        </div>

        <div>
          <h6 className='text-grey-500 text-xs font-medium leading-2.5 mb-[5px]'>
            Date Taken
          </h6>
          <p className='text-grey-400 text-xs font-normal leading-1.5'>
            1 year ago (12 April 2023 - 11 April 2024)
          </p>
        </div>

        <div className='py-[1.5rem] px-[3.3rem] bg-grey-50 grid grid-cols-3 rounded-base border border-grey-50'>
          <div className='text-grey-400 text-xs font-normal leading-2.5'>
            <p>Price </p>
            <b className='text-grey-500 text-lg font-medium leading-2.5'>
              €1100
            </b>
          </div>
          <div className='text-grey-400 text-xs font-normal leading-2.5'>
            <p>Number </p>
            <b className='text-grey-500 text-lg font-medium leading-2.5'>2</b>
          </div>
          <div className='text-grey-400 text-xs font-normal leading-2.5'>
            <p>Number </p>
            <b className='text-grey-500 text-lg font-medium leading-2.5'>1</b>
          </div>
        </div>

        <div>
          <h5 className='text-black text-base font-medium leading-2.5 mb-[1.7rem]'>
            Locations
          </h5>
          <ul className='list-inside list-image-checkmark grid grid-cols-4 text-grey-700 text-sm font-normal leading-2.8 gap-[6px]'>
            {Array.from({ length: 12 }, (_, i) => (
              <li key={i}>Spain</li>
            ))}
          </ul>
        </div>

        <Button variation='primary'>Submit</Button>

        <button className='text-center text-black text-[1.19rem] font-semibold leading-[1.79rem] underline'>
          Save & Publish Later
        </button>
      </div>
    </div>
  );
}
