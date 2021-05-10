import { AppWrapper } from "../context/state";
import { ToastProvider } from "react-toast-notifications";

import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <ToastProvider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ToastProvider>
  );
}
