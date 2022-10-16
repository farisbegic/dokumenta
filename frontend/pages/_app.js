import '../styles/globals.scss'
import Header from '../components/common/Header'
import Footer from "../components/common/Footer";
import AuthenticationContextProvider from "../contexts/AuthenticationContextProvider";
import {useRouter} from "next/router";
import privateRoutes from "../constants/privateRoutes";
import protectedRoutes from "../constants/protectedRoutes";
import PrivateRoute from "../components/common/PrivateRoute";
import ProtectedRoute from "../components/common/ProtectedRoute";


function MyApp({ Component, pageProps }) {
    const router = useRouter();
  return (
      <AuthenticationContextProvider>
        <Header />
          {
              privateRoutes.includes(router.pathname) ?
                  <PrivateRoute>
                      <Component {...pageProps} />
                  </PrivateRoute>
                  : protectedRoutes.includes(router.pathname) ?
                      <ProtectedRoute>
                          <Component {...pageProps} />
                      </ProtectedRoute>
                      : <Component {...pageProps} />
          }
        <Footer />
      </AuthenticationContextProvider>
  )
}

export default MyApp
