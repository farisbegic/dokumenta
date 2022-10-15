import '../styles/globals.scss'
import Header from '../components/common/Header'
import Footer from "../components/common/Footer";
import AuthenticationContextProvider from "../contexts/AuthenticationContextProvider";

function MyApp({ Component, pageProps }) {
  return (
      <AuthenticationContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthenticationContextProvider>
  )
}

export default MyApp
