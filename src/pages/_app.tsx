import { AppProps } from 'next/app';
import { MyThemeProvider } from '../styles/MyThemeProvider';
import { GlobalStyle } from 'styles/global-styles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MyThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </MyThemeProvider>
  );
};

export default MyApp;
