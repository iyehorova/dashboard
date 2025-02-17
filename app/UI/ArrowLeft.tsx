interface Svg {
  width: string;
  height: string;
}
export const ArrowLeft = ({ width, height }: Svg) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.00006 2.6667C5.73973 2.40635 5.31759 2.40635 5.05726 2.6667C4.79693 2.92705 4.79693 3.34916 5.05726 3.60951L8.97639 7.52862C9.23673 7.78896 9.23673 8.21109 8.97639 8.47142L5.05726 12.3906C4.79693 12.6509 4.79693 13.073 5.05726 13.3334C5.31759 13.5937 5.73973 13.5937 6.00006 13.3334L10.862 8.47142C11.1223 8.21109 11.1223 7.78896 10.862 7.52862L6.00006 2.6667Z"
        fill="currentColor"
      />
    </svg>
  );
};
