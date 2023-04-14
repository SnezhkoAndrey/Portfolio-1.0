import { useState, useEffect } from "react";
import Header from "@/components/Header";
import { GlobalContextProvider } from "@/context/GlobalContext";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import "../i18next";

export default function App({ Component, pageProps }: AppProps) {
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;
  return (
    <GlobalContextProvider>
      <Header>
        <Component {...pageProps} />
      </Header>
    </GlobalContextProvider>
  );
}
