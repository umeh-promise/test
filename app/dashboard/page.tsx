'use client';

import DashboardForm from './components/DashboardForm';
import DashboardDogInfo from './components/DashboardDogInfo';

export default function Dashboard() {
  return (
    <main className='min-h-screen flex flex-col lg:flex-row gap-[9.8rem] pl-[2.5rem] md:px-[11.1rem] lg:px-[2.5rem] xl:pl-[11.3rem] pr-[2.6rem] xl:pr-[16rem] py-[4.5rem]'>
      <DashboardDogInfo />
      <DashboardForm />
    </main>
  );
}
