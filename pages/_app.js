import "./../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { StoreProvider } from "./../context/Cart";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  });
  return (
    <>
      <SessionProvider session={session}>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </SessionProvider>
    </>
  );
}
