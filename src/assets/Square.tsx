import type { SVGProps } from "react";

const Square = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 7.044 3.567" {...props}>
    <path d="M.265 3.303V.265h3.607v3.038H6.78V.265" fill="none" stroke="#000" strokeWidth={0.529} />
  </svg>
);

export default Square;
