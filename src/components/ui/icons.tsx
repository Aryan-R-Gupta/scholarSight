import { cn } from "@/lib/utils";
import * as React from "react";

export function SparklesIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-7.184c0-1.675.68-3.18 1.815-4.232Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M12.971 2.25a25.533 25.533 0 0 0-9.611 9.074 12.182 12.182 0 0 0-2.096 6.33a.75.75 0 0 0 .75.75c3.81 0 7.238-1.743 9.563-4.512a6.756 6.756 0 0 1-2.437-4.243 6.75 6.75 0 0 1 .564-3.48z"
        clipRule="evenodd"
      />
    </svg>
  );
}
