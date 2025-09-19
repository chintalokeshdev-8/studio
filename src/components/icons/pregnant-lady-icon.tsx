import * as React from "react";

export function PregnantLadyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path d="M12 11.5c-2.5 0-4.5 2-4.5 4.5v7h9v-7c0-2.5-2-4.5-4.5-4.5Z" />
      <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    </svg>
  );
}
