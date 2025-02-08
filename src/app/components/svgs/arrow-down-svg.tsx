interface Props {
  className: string;
}
export default function ArrowDownSvg({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Arrow / Arrow_Down_SM">
        <path
          id="Vector"
          d="M12 7V17M12 17L16 13M12 17L8 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
