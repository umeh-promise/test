import React from 'react';

type Props = JSX.IntrinsicElements['svg'];

export default function ChevronDownIcon(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='11'
      height='11'
      viewBox='0 0 11 11'
      fill='none'
      {...props}
    >
      <path
        d='M8.53125 4.1875L5.25 7.46875L1.96875 4.1875'
        stroke='#34333E'
        strokeWidth='0.65625'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
