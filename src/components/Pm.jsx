import React from 'react';

const Pm = () => {
  const payments = [
    { icon: "fab fa-cc-visa", color: "blue-600", name: "Visa" },
    { icon: "fab fa-cc-mastercard", color: "red-600", name: "Mastercard" },
    { icon: "fab fa-paypal", color: "blue-500", name: "PayPal" },
    { icon: "fas fa-mobile-alt", color: "green-600", name: "OVO" },
    { icon: "fas fa-wallet", color: "blue-400", name: "Gopay" },
    { icon: "fas fa-qrcode", color: "purple-600", name: "QRIS" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-500 to-blue-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Metode Pembayaran</h2>
          <p className="text-xl text-gray-600">Berbagai cara pembayaran yang mudah dan aman</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {payments.map((payment, index) => (
            <div key={index} className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
              <i className={`${payment.icon} text-4xl text-${payment.color} mb-3`}></i>
              <p className="font-semibold">{payment.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pm;