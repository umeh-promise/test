import React from 'react';

type Props = JSX.IntrinsicElements['svg'];

export default function ChevronLeftIcon(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      {...props}
    >
      <path
        d='M15.5 5L8 12.5L15.5 20'
        stroke='#51526C'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
