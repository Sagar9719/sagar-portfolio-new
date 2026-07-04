import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-medium text-muted transition-colors hover:border-brand-indigo/60 hover:text-brand-indigo",
        className
      )}
      {...props}
    />
  );
}
