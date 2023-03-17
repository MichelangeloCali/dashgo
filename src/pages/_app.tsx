import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { makeServer } from '../services/mirage'
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { theme } from '../styles/theme'
import { useState } from 'react'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <SidebarDrawerProvider>
            <Component {...pageProps} />
          </SidebarDrawerProvider>
        </ChakraProvider>
      </Hydrate>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
