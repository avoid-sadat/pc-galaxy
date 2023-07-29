import { AppProvider } from "@/AppContext";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={pageProps.session}>
      <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
    </SessionProvider>
  );
}
