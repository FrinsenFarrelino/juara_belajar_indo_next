import React, { useState } from "react";

const Faq = () => {
  const [firstQuestion, setFirstQuestion] = useState(false);
  const [secondQuestion, setSecondQuestion] = useState(false);
  const [thirdQuestion, setThirdQuestion] = useState(false);
  const [fourthQuestion, setFourthQuestion] = useState(false);
  const [fifthQuestion, setFifthQuestion] = useState(false);

  return (
    <div id="faq" className="py-20 px-12 md:px-16 bg-rose-200">
      <h1 className="text-4xl text-center font-bold mb-3">
        <span className="text-red-700">Frequently Asked</span> Question
      </h1>
      <section className="">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <div className="mt-12 space-y-8">
            <div className="rounded-lg">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => setFirstQuestion(!firstQuestion)}
              >
                <h1 className="font-semibold">
                  How i can play for my appoinment ?
                </h1>

                {firstQuestion ? (
                  <span className="text-red-700 bg-gray-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-red-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                )}
              </button>

              {firstQuestion ? (
                <p className="p-8 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi
                  ab maxime cum laboriosam recusandae facere dolorum veniam quia
                  pariatur obcaecati illo ducimus?
                </p>
              ) : (
                <></>
              )}
            </div>

            <hr className="border-red-700" />

            <div className="rounded-lg">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => setSecondQuestion(!secondQuestion)}
              >
                <h1 className="font-semibold">
                  Is the cost of the appoinment covered by private health
                  insurance?
                </h1>

                {secondQuestion ? (
                  <span className="text-red-700 bg-gray-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-red-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                )}
              </button>

              {secondQuestion ? (
                <p className="p-8 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi
                  ab maxime cum laboriosam recusandae facere dolorum veniam quia
                  pariatur obcaecati illo ducimus?
                </p>
              ) : (
                <></>
              )}
            </div>

            <hr className="border-red-700" />

            <div className="rounded-lg">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => setThirdQuestion(!thirdQuestion)}
              >
                <h1 className="font-semibold">Do i need a referral?</h1>

                {thirdQuestion ? (
                  <span className="text-red-700 bg-gray-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-red-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                )}
              </button>

              {thirdQuestion ? (
                <p className="p-8 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi
                  ab maxime cum laboriosam recusandae facere dolorum veniam quia
                  pariatur obcaecati illo ducimus?
                </p>
              ) : (
                <></>
              )}
            </div>

            <hr className="border-red-700" />

            <div className="rounded-lg">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => setFourthQuestion(!fourthQuestion)}
              >
                <h1 className="font-semibold">What are your opening house?</h1>

                {fourthQuestion ? (
                  <span className="text-red-700 bg-gray-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-red-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                )}
              </button>

              {fourthQuestion ? (
                <p className="p-8 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi
                  ab maxime cum laboriosam recusandae facere dolorum veniam quia
                  pariatur obcaecati illo ducimus?
                </p>
              ) : (
                <></>
              )}
            </div>

            <hr className="border-red-700" />

            <div className="rounded-lg">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => setFifthQuestion(!fifthQuestion)}
              >
                <h1 className="font-semibold">
                  What can i expect at my first consultation?
                </h1>

                {fifthQuestion ? (
                  <span className="text-red-700 bg-gray-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="text-white bg-red-700 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                )}
              </button>

              {fifthQuestion ? (
                <p className="p-8 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi
                  ab maxime cum laboriosam recusandae facere dolorum veniam quia
                  pariatur obcaecati illo ducimus?
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
