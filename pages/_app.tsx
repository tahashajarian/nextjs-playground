import { AppWrapper } from "../context/state";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />;
    </AppWrapper>
  );
}
