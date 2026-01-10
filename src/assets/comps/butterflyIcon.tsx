type Props = {
  className?: string;
};

const ButterflyIcon = ({ className }: Props) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 8 8"
      >
        <path
          fill="currentColor"
          d="M4 4c0-9 9 0 0 0c0 9 7 0 0 0c0 9-7 0 0 0c-9 0 0-9 0 0"
        />
      </svg>
    </div>
  );
};

export default ButterflyIcon;
