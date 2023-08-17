import type { AppProps } from "next/app";
/** Next.js documents에서 Built-In CSS Support 내용 참조 - 전역 스타일시트는 pages/_app.js 파일에 import */
import "../styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
