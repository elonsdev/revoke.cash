import { track } from '@amplitude/analytics-browser';
import Footer from 'components/Footer/Footer';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    track('Viewed Page', { path: router.asPath });
  }, [router.isReady, router.asPath]);

  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black text-zinc-200 font-CircularMedium">
      <Container
        fluid
        className="App"
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          height: '100%',
          width: '100%',

          margin: 'auto',
        }}
      >
        <div style={{ flex: '1 0 auto', height: '100%' }}>
          <Component {...pageProps} />
        </div>
        <div style={{ flexShrink: '0' }}>
          <Footer />
        </div>
      </Container>
      <Script async defer src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </div>
  );
};

export default App;
