import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { SnackbarProvider } from 'notistack'
import { wrapper, store } from '@/store/store'
import '@/styles/globals.css'

const persistor = persistStore(store)

function App({ Component, pageProps }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider attribute='class'>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </PersistGate>
  )
}

export default wrapper.withRedux(App)
