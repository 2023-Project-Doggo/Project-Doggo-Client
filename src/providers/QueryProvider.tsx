"use client";

import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

interface Props extends PropsWithChildren {
  queryConfig?: QueryClientConfig;
}

export default function Provider({ children, queryConfig }: Props) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          ...queryConfig?.defaultOptions,
          queries: {
            ...queryConfig?.defaultOptions?.queries,
            suspense: true,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
