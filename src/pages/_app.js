import '../styles/globals.css'; // Import global styles
import '../styles/layout.module.css'; // Import layout-specific styles

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
