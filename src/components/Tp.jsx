import React from 'react';

const Tp = () => {
  const steps = [
    {
      number: 1,
      title: "Pilih Game & Nominal",
      description: "Pilih game yang ingin kamu top up dan tentukan jumlah diamond/currency yang dibutuhkan"
    },
    {
      number: 2,
      title: "Masukkan ID Player",
      description: "Input ID game dan server kamu dengan benar untuk memastikan top up sampai ke akun yang tepat"
    },
    {
      number: 3,
      title: "Bayar & Selesai",
      description: "Lakukan pembayaran dan diamond akan langsung masuk ke akun game kamu dalam hitungan menit"
    }
  ];

  return (
    <section id="topup" className="py-20 bg-gradient-to-b from-blue-300 to-blue-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Cara Top Up Mudah</h2>
          <p className="text-xl text-gray-600">Hanya 3 langkah sederhana untuk top up game kamu</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="feature-card p-8 rounded-2xl text-center card-hover">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl font-bold text-blue-600">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tp;