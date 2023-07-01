import "@/styles/globals.css";

import Layout from "../components/Layout";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  let DefaultLayout = Layout;
  if (Component.layout === null) DefaultLayout = React.Fragment;
  else if (Component.layout) DefaultLayout = Component.layout;
  const Router = useRouter();
  useEffect(() => {
    if (Router.pathname !== "/") {
      const token = localStorage.getItem("token");
      if (!token) {
        Router.push("/");
      } else {
      }
    }
  }, []);

  return (
    <>
      <ToastContainer />

      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
