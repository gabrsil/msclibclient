import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

const navList = [
  {
    name: "Atividade",
    value: "activity"
  },
  {
    name: "ListenList",
    value: "listenlist"
  },
  {
    name: "Perfil",
    value: "profile"
  }
]

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const pathname = router.pathname.replace('/', '')

  return (
    <>
      <header>
        <div className="bg-gray-50 border-b border-gray-200 h-12 flex items-center px-5">
          <div className="w-1/4"></div>
          <div className="w-2/4"></div>
          <div className="w-1/4 uppercase font-semibold">
            {navList.map((item) => (
            <Link 
            href={item.value} 
            className={`mr-5 ${item.value === pathname ? 'text-gray-700' : 'text-gray-500'}`}>              
                {item.name}
            </Link>
            ))}
          </div>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
