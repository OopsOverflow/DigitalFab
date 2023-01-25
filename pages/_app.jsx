import '../styles.css';
import { SSRProvider } from '@react-aria/ssr';

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>,
  );
}
