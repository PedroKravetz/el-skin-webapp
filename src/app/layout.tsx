"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Provider } from "react-redux";
import { store } from "../store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>React App</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div>
          <Provider store={store}>
            <Header />
            <div id="root">{children}</div>
            <Footer />
          </Provider>
        </div>
      </body>
    </html>
  );
}
