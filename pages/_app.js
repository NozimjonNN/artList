import "@/styles/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Проверяем, является ли текущая страница "/login"
  const isLoginPage = router.pathname === '/login';

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      {!isLoginPage && <Footer />} {/* Footer не отображается на странице login */}
    </>
  );
}
