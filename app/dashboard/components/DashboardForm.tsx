import Logo from '@/app/assets/icons/Logo';
import PlusIcon from '@/app/assets/icons/PlusIcon';
import SendIcon from '@/app/assets/icons/SendIcon';
import UserIcon from '@/app/assets/icons/UserIcon';

export default function DashboardForm() {
  return (
    <div className='hidden lg:flex flex-col basis-full lg:basis-[66.3rem] '>
      <div className='flex w-fit px-[1.5rem] py-[1rem] items-center gap-[1.1rem] rounded-base bg-grey-800 self-end mb-[10.8rem]'>
        <UserIcon />
        <span className='text-grey-700 text-sm font-medium leading-2.8'>
          James Blunt
        </span>
      </div>

      <div className='w-full flex gap-[3.6rem] px-[1.5rem] lg:px-[3rem] py-[2rem] items-start bg-stone-100 rounded-base mb-[3.8rem] '>
        <Logo variation='no-text' />
        <span className='flex flex-col gap-[1rem]'>
          <h5 className='text-grey-500 text-base lg:text-xl leading-2.5 font-medium'>
            What do you want to generate
          </h5>
          <p className='text-grey-400 text-base font-normal leading-2.5'>
            You can provide a description,
          </p>
        </span>
      </div>

      <div className='flex gap-[5px] mb-[3.8rem]'>
        <span className='flex pt-[3px] pb-[2px] px-[1rem] items-center justify-center rounded-sm bg-stone-200'>
          J
        </span>
        <p className='text-grey-400 text-base font-normal leading-2.5'>
          Pictures of Dogs laughing, with a short back story
        </p>
      </div>

      <div className='flex items-end gap-[5px] justify-self-end flex-1'>
        <div className='flex items-center w-full h-[4.7rem] py-[5px] pr-[1.4rem] pl-[1.1rem] gap-[8px] shrink-0 rounded-base border border-stone-300 bg-white shadow-sm outline-offset-3 outline-[3px] outline-grey-100'>
          <PlusIcon />

          <input type='text' className='bg-transparent outline-none flex-1' />
          <SendIcon />
        </div>
      </div>
    </div>
  );
}
