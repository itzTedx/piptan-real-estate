"use client";

import { ProgressProvider } from "@bprogress/next/app";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="3px"
      color="#D40C1A"
      options={{ showSpinner: false }}
      shallowRouting
      memo
    >
      {children}
    </ProgressProvider>
  );
};

export default Providers;
