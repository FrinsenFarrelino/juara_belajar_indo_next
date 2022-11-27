import React from "react";

const Whatsapp = () => {
  return (
    <>
      <div className="py-10 px-12 bg-slate-50">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
          <div className="md:w-1/3 mx-3">
            <h1 className="font-bold text-4xl text-center md:text-start">
              Kontak Kami Melalui
              <span className="text-green-600"> Whatsapp</span>
            </h1>
          </div>
          <div className="w-2/3 flex flex-col md:flex-row md:justify-end items-center">
            <div className="my-5 md:my-0">
              <img src="/whatsapp.png" width={50} alt="whatsapp logo" />
            </div>
            <div className="text-center md:text-start my-2">
              <div className="my-1 mx-7">
                <h1 className="text-2xl font-semibold">John Doe</h1>
              </div>
              <div className="my-1 mx-7">
                <h1>+628123456789</h1>
              </div>
            </div>
            <div className="my-2">
              <a
                href="https://wa.me/62895419655533"
                target="_blank"
                className="px-6 py-3 bg-green-600 text-white rounded-full"
              >
                Chat Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatsapp;
