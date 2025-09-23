'use client';

import { ProgressProvider } from '@bprogress/next/app';
// if you need type replace it
// const Providers = ({ children }: { children: React.ReactNode }) =>
const Providers = ({ children }) => {
  return (
    <ProgressProvider
      height="4px"
      color="#6dd85d"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

export default Providers;