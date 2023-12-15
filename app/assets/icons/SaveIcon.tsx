import React from 'react';

type Props = JSX.IntrinsicElements['svg'];

export default function SaveIcon(props: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='19'
      viewBox='0 0 18 19'
      fill='none'
      {...props}
    >
      <path
        d='M9.66751 4.91016H3.83249C2.54999 4.91016 1.5 5.96015 1.5 7.24265V15.7627C1.5 16.8502 2.28 17.3151 3.2325 16.7826L6.17999 15.1401C6.49499 14.9676 7.005 14.9676 7.3125 15.1401L10.26 16.7826C11.2125 17.3151 11.9925 16.8502 11.9925 15.7627V7.24265C12 5.96015 10.95 4.91016 9.66751 4.91016Z'
        stroke='currentColor'
        strokeWidth='1.07812'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 7.24265V15.7627C12 16.8502 11.22 17.3076 10.2675 16.7826L7.32001 15.1401C7.00501 14.9676 6.49499 14.9676 6.17999 15.1401L3.2325 16.7826C2.28 17.3076 1.5 16.8502 1.5 15.7627V7.24265C1.5 5.96015 2.54999 4.91016 3.83249 4.91016H9.66751C10.95 4.91016 12 5.96015 12 7.24265Z'
        stroke='currentColor'
        strokeWidth='1.07812'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.5 4.33249V12.8525C16.5 13.94 15.72 14.3975 14.7675 13.8725L12 12.3275V7.24249C12 5.95999 10.95 4.91 9.66751 4.91H6V4.33249C6 3.04999 7.04999 2 8.33249 2H14.1675C15.45 2 16.5 3.04999 16.5 4.33249Z'
        stroke='currentColor'
        strokeWidth='1.07812'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
