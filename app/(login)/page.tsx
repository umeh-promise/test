'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Logo from '@/app/assets/icons/Logo';
import Button from '@/app/components/Button';

import CountryLogo from '@/app/assets/icons/CountryLogo';
import ChevronDownIcon from '@/app/assets/icons/ChevronDownIcon';
import login_image from '@/app/assets/images/hand-presenting-model-house-home-loan-campaign 1.png';

export default function Home() {
  const router = useRouter();

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <main className='h-screen flex gap-[9.8rem] pl-[2.5rem] md:px-[11.1rem] lg:px-[2.5rem] xl:pl-[11.3rem] pr-[2.6rem] xl:pr-[16rem] [&>*]:h-[85%]'>
      <div className='hidden bg-green-100 basis-[58rem] lg:flex justify-end flex-col pl-[5.7rem] pr-[2px] rounded-bl-lg gap-[3.7rem] pt-[3.7rem]'>
        <Logo />

        <div className='flex flex-col gap-[1.6rem]'>
          <h3 className='text-grey-600 text-2xl font-bold leading-4 tracking-5'>
            Revolutionize your Customer Service Game
          </h3>
          <p>
            Connect authentically with customers through natural, flowing
            conversations.{' '}
          </p>
        </div>

        <div className='leading-none'>
          <Image src={login_image} alt='login-image' />
        </div>
      </div>
      <form
        className='flex justify-center flex-col basis-full lg:basis-[56.1rem]'
        onSubmit={submit}
      >
        <Logo className='block lg:hidden self-center mb-[3rem]' />

        <div className='flex flex-col gap-[5px] mb-[3.8rem]'>
          <h3 className='text-grey-500 text-center text-2xl font-semibold leading-4 tracking-5'>
            Provide your phone number
          </h3>
          <p className='text-grey-400 text-center text-sm font-light leading-2'>
            Kindly use an active WhatsApp number, and we&apos;ll send a
            confirmation message to the provided number.
          </p>
        </div>

        <div className='flex items-center mb-[6.2rem] gap-[5px]'>
          <div className='flex '>
            <button
              id='states-button'
              type='button'
              data-dropdown-toggle='dropdown-states'
              className='w-full flex items-center h-[4.7rem] py-[5px] pr-[1.4rem] pl-[1.1rem] gap-[8px] shrink-0 self-stretch rounded-xs border border-grey-500 bg-white shadow-sm outline-offset-3 outline-[3px] outline-grey-100'
            >
              <CountryLogo />
              <span>+356</span>
              <ChevronDownIcon />
            </button>
          </div>
          <div className='relative  flex-1'>
            <input
              type='number'
              className='w-full h-[4.7rem] py-[5px] pr-[1.4rem] pl-[1.1rem] gap-[8px] shrink-0 self-stretch rounded-xs border border-grey-500 bg-white shadow-sm outline-offset-3 outline-[3px] outline-grey-100 peer [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
              required
            />
            <label
              htmlFor=''
              className='absolute transition-all duration-300 ease-in  peer-placeholder-shown:scale-100 transform translate-y-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:scale-75 peer-focus:-translate-y-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  z-10 origin-[0] start-2.5 peer-focus:text-blue-600'
            >
              Phone Number
            </label>
          </div>
        </div>
        <div className='w-full flex flex-col gap-[1.8rem]'>
          <Button variation='primary' type='submit'>
            Continue
          </Button>
          <Button variation='secondary'>Have an Account? Login</Button>
        </div>
      </form>
    </main>
  );
}
