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
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v1l-2 5h4l-2 -5" />
      <path d="M14 12v8" />
      <path d="M10 12v8" />
      <path d="M10 15h4" />
      <path d="M10.5 12c-2.5 0-4.5 2-4.5 4.5" />
      <path d="M13.5 12c2.5 0 4.5 2 4.5 4.5" />
    </svg>
  );
}
