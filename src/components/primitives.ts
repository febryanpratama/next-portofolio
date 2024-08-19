import { tv } from 'tailwind-variants';

export const title = tv({
  base: 'tracking-tight inline font-semibold',
  variants: {
    color: {
      violet: 'from-[#FF1CF7] to-[#b249f8]',
      yellow: 'from-[#FF705B] to-[#FFB457]',
      blue: 'from-[#5EA2EF] to-[#0072F5]',
      cyan: 'from-[#00b7fa] to-[#01cfea]',
      green: 'from-[#6FEE8D] to-[#17c964]',
      pink: 'from-[#FF72E1] to-[#F54C7A]',
      foreground: 'dark:from-[#FFFFFF] dark:to-[#4B4B4B]',
    },
    size: {
      extrasmall: 'text-md lg:text-md gradient-300 hover:text-violettogradient',
      small: 'text-lg lg:text-2xl gradient-300 hover:text-violettogradient',
      sm: 'text-3xl lg:text-4xl',
      md: 'text-[2.3rem] lg:text-5xl leading-9',
      lg: 'text-4xl lg:text-6xl',
      xl: 'text-5xl lg:text-7xl',
    },
    padding: {
      small: 'px-4 py-2',
      medium: 'px-6 py-3',
      large: 'px-8 py-4',
      paddingtop: 'pt-4',
    },
    fullWidth: {
      true: 'w-full block',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  compoundVariants: [
    {
      color: [
        'violet',
        'yellow',
        'blue',
        'cyan',
        'green',
        'pink',
        'foreground',
      ],
      class: 'bg-clip-text text-transparent bg-gradient-to-b',
    },
  ],
});

export const subtitle = tv({
  base: 'w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full',
  variants: {
    fullWidth: {
      true: '!w-full',
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
