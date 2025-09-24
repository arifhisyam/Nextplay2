import React from 'react';

const About = () => {
  const stats = [
    {
      icon: "fas fa-users",
      color: "blue",
      title: "50.000+ Pengguna",
      description: "Lebih dari 50 ribu gamers telah mempercayakan top up mereka kepada kami"
    },
    {
      icon: "fas fa-check-circle",
      color: "blue",
      title: "100% Terjamin",
      description: "Setiap transaksi dijamin aman dan diamond sampai ke akun kamu"
    },
    {
      icon: "fas fa-headset",
      color: "blue",
      title: "Support 24/7",
      description: "Customer service siap membantu kamu kapan saja, 24 jam nonstop"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-300 to-blue-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang NextPlay</h2>
          <p className="text-xl text-gray-800">Platform top up game terpercaya sejak 2023</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 bg-${stat.color}-100 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                <i className={`${stat.icon} text-${stat.color}-600 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">{stat.title}</h3>
              <p className="text-gray-800">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;