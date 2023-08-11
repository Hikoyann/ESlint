import React from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [state] = useState();
  useEffect(() => {
    if (state) return;
  }, [state]);
  return <Component {...pageProps} />;
}
