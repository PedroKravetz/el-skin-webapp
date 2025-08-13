"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { store } from "../store";
import { GlobalStyle } from "../global";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/themes";
import StyledComponentsRegistry from "../lib/registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="logo192.png" />
        <link rel="manifest" href="manifest.json" />
        <title>React App</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div>
          <Provider store={store}>
            <StyledComponentsRegistry>
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <div id="root">{children}</div>
                <Footer />
              </ThemeProvider>
            </StyledComponentsRegistry>
          </Provider>
        </div>
      </body>
    </html>
  );
}
