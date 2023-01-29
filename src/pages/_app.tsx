import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <div className="bg-gray-50 border-b border-gray-200 h-12 flex items-center px-5">
          <div className="w-1/4"></div>
          <div className="w-2/4"></div>
          <div className="w-1/4 uppercase font-semibold text-gray-500">
            <Link href="activity" className="mr-5">              
                Atividade
            </Link>
            <Link href="listenlist" className="mr-5">
              ListenList
            </Link>
            <Link href="profile" className="mr-5">
              Perfil
            </Link>
          </div>
        </div>
      </header>

      <Component {...pageProps} />
    </>
  );
}
