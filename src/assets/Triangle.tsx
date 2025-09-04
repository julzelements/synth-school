import type { SVGProps } from "react";

const Triangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 7.185 3.68" {...props}>
    <path d="M.179 3.485L3.592.36l3.414 3.126" fill="none" stroke="#000" strokeWidth={0.529} />
  </svg>
);

export default Triangle;
