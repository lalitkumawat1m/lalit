import { trpc } from "_client/_app/trpc";
import { ContextProviders } from "_client/_stores/_context-providers";
import { LoadInitialData } from "_client/_stores/_load-initial-data";

import { Footer } from "components/layout/footer";
import { Header } from "components/layout/header";
import { Toast, useToast } from "components/toast";

import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import "styles/tailwind.css";
import ReactTooltip from "react-tooltip";

const Loaders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ContextProviders>
      <LoadInitialData>{children}</LoadInitialData>
    </ContextProviders>
  );
};

const App = ({ pageProps, Component }: AppProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window) {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <Loaders>
      <Header />
      <main className="min-h-[200vh]">
        <Component {...pageProps} />
      </main>
      <Footer />
    </Loaders>
  );
};

export default trpc.withTRPC(App);
