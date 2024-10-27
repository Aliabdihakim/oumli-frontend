import clsx from "clsx";
import type React from "react";

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
  "data-testid"?: string;
};

const PageWrapper = ({
  children,
  className,
  "data-testid": testId,
}: PageWrapperProps) => (
  <div
    className={clsx(
      "px-3 py-4 print:p-0 md:px-16 md:py-10 max-w-7xl mx-auto",
      className
    )}
    data-testid={testId}
  >
    {children}
  </div>
);

PageWrapper.Header = ({ children }: { children: React.ReactNode }) => (
  <h1 className="mb-3">{children}</h1>
);

export { PageWrapper };
