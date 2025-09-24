import React from "react";

const TopUpPage = () => {
  const items = [
    { name: "Weekly Diamond Pass", price: "Rp 27.999" },
    { name: "2x Weekly Diamond Pass", price: "Rp 55.998" },
    { name: "3x Weekly Diamond Pass", price: "Rp 83.997" },
    { name: "Twilight Pass", price: "Rp 147.777" },
  ];

  const Pembayaran = [
    { name: "Dana", price: "Rp 27.999" },
    { name: "Gopay", price: "Rp 55.998" },
    { name: "Ovo", price: "Rp 83.997" },
    { name: "Shopee Pay", price: "Rp 147.777" },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-500 flex flex-col items-center py-10">
      
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg mb-8">
        <div className="bg-blue-500 text-white font-bold px-4 py-3 rounded-t-2xl">
          1. Masukkan Data Akun
        </div>
        <div className="p-6 grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-700 font-semibold">ID</label>
            <input
              type="text"
              placeholder="Masukkan ID"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold">Server</label>
            <input
              type="text"
              placeholder="Masukkan Server"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Pilih Nominal */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg">
        <div className="bg-blue-500 text-white font-bold px-4 py-3 rounded-t-2xl">
          2. Pilih Nominal
        </div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-blue-100 hover:bg-blue-200 cursor-pointer rounded-xl p-6 shadow-md transition-all duration-300 outline-3 outline-transparent hover:outline-blue-500">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.name}</h3>
              <p className="text-xl font-bold text-blue-900">{item.price}</p>
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg shadow">
                Pilih
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg">
        <div className="bg-blue-500 text-white font-bold px-4 py-3 rounded-t-2xl">
          3. Pilih Pembayaran
        </div>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Pembayaran.map((pay, index) => (
            <div
              key={index}
              className="bg-blue-100 hover:bg-blue-200 cursor-pointer rounded-xl p-6 shadow-md transition-all duration-300 outline-3 outline-transparent hover:outline-blue-500">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">{pay.name}</h3>
              <p className="text-xl font-bold text-blue-900">{pay.price}</p>
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg shadow">
                Pilih
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopUpPage;
