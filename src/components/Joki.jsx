import React from 'react';

const Joki = () => {
  const features = [
    {
      icon: "fas fa-shield-check",
      color: "blue",
      title: "Aman & Terpercaya",
      description: "Akun kamu dijamin aman dengan sistem keamanan berlapis"
    },
    {
      icon: "fas fa-bolt",
      color: "blue",
      title: "Proses Cepat",
      description: "Pengerjaan sesuai timeline yang disepakati"
    },
    {
      icon: "fas fa-users",
      color: "blue",
      title: "Player Profesional",
      description: "Dilakukan oleh player berpengalaman dengan win rate tinggi"
    }
  ];

  return (
    <section id="joki" className="flex py-20 bg-blue-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Layanan Joki Profesional</h2>
          <p className="text-xl text-gray-600">Naik rank dengan bantuan player profesional</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="/logo.png"></img>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Kenapa Pilih Joki NextPlay?</h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-${feature.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <i className={`${feature.icon} text-${feature.color}-600`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Joki;