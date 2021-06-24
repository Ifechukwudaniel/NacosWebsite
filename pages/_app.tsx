import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
        <Component {...pageProps} />
        <NotificationContainer/>
    </Provider>
  )
}
export default MyApp
