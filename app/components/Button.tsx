interface ButtonProps {
  children: React.ReactNode;
  variation: 'primary' | 'secondary';
  size?: 'small' | 'large';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  variation,
  size = 'large',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const variations = {
    primary:
      'bg-grey-500 text-white hover:bg-white hover:border hover:border-grey-500 hover:text-grey-500 ',
    secondary:
      'bg-white border border-grey-500 text-grey-500 hover:bg-grey-500 hover:text-white',
  };

  const sizes = {
    small: 'h-[3.3rem] px-[2rem] py-[0.7rem] gap-[6px] rounded-[5px] text-xs',
    large: 'h-[5.4rem] px-[5rem] py-[1.8rem] gap-[8px] rounded-[4px] text-md',
  };

  return (
    <button
      className={`flex  justify-center items-center font-normal leading-3 tracking-3 transition-all duration-300 ${
        sizes[size as keyof typeof sizes]
      }
       ${variations[variation as keyof typeof variations]} ${className}`}
      onClick={() => onClick?.()}
      type={type}
    >
      {children}
    </button>
  );
}
