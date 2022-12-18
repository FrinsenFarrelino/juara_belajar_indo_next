import React from "react";

const Kursus = () => {
  return (
    <div id="kursus" className="py-20 px-12 md:px-16 bg-rose-200">
      <h1 className="text-4xl text-center font-bold mb-3">
        Kursus Yang Tersedia <span className="text-red-700">Untuk Kamu</span>
      </h1>
      <div className="flex justify-center flex-wrap">
        <div className="w-52 h-64 bg-slate-50 rounded-lg shadow-2xl p-7 m-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Paket 1</h1>
            <img src="/logo192.png" alt="" width={80} className="py-4" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-52 h-64 bg-slate-50 rounded-lg shadow-2xl p-7 m-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Paket 2</h1>
            <img src="/logo192.png" alt="" width={80} className="py-4" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-52 h-64 bg-slate-50 rounded-lg shadow-2xl p-7 m-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Paket 3</h1>
            <img src="/logo192.png" alt="" width={80} className="py-4" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-52 h-64 bg-slate-50 rounded-lg shadow-2xl p-7 m-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Paket 4</h1>
            <img src="/logo192.png" alt="" width={80} className="py-4" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-52 h-64 bg-slate-50 rounded-lg shadow-2xl p-7 m-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Paket 5</h1>
            <img src="/logo192.png" alt="" width={80} className="py-4" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-52 h-64 bg-slate-50 rounded-lg shadow-2xl p-7 m-8">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Paket 6</h1>
            <img src="/logo192.png" alt="" width={80} className="py-4" />
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kursus;
