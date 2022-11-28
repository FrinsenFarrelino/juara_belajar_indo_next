import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { initFirebase } from "../config/firebaseConfig";
import styles from "../styles/Home.module.css";

initFirebase;
const auth = getAuth();

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [complete, setComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setComplete(false);
    }, 3000);
  }, [error, complete]);

  const handlePasswordReset = async (event) => {
    setLoading(true);
    event.preventDefault();

    const email = event.target.email.value;
    try {
      await sendPasswordResetEmail(auth, email);
      setComplete(true);
    } catch (error) {
      setErrorMessage(error.message);
      setError(true);
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <section className="bg-gray-50">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="mb-5">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Masukkan email anda
              </h1>
            </div>
            {error ? (
              <div
                className="mb-4 bg-red-100 border border-red-400 text-red-700 pl-4 pr-10 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Error! </strong>
                <span className="block sm:inline">{errorMessage}</span>
                <span
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={() => setError(false)}
                >
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            ) : (
              <></>
            )}
            {complete ? (
              <div
                className="mb-4 bg-green-100 border border-green-400 text-green-700 pl-4 pr-10 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Success! </strong>
                <span className="block sm:inline">
                  Email verifikasi telah dikirim
                </span>
                <span
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={() => setComplete(false)}
                >
                  <svg
                    className="fill-current h-6 w-6 text-green-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            ) : (
              <></>
            )}
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handlePasswordReset}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-base font-medium text-gray-900 "
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 focus:bg-red-900 font-medium rounded-full text-sm px-5 py-2.5 text-center"
                  >
                    {!loading ? "Kirim Email Reset Password" : "Loading....."}
                  </button>
                  <div className="mt-1 flex justify-center">
                    <Link
                      href="/login"
                      className="text-blue-800 underline underline-offset-auto"
                    >
                      Kembali ke Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForgotPassword;
