'use-client'
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './global-styles';
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;
`

export const MyThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (<Head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
  </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainWrapper>
        {children}
      </MainWrapper>
    </ThemeProvider>
  );
};
