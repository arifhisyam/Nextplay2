import React from 'react';

const Footer = () => {
  const footerLinks = {
    services: ["Top Up Game", "Joki Rank", "Mabar", "Akun Premium"],
    help: ["Cara Top Up", "FAQ", "Syarat & Ketentuan", "Kebijakan Privasi"]
  };

  return (
    <footer className="bg-blue-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                 <img src="./logo.png" />
              </div>
              <span className="text-2xl font-bold">NextPlay</span>
            </div>
            <p className="text-blue-100 mb-6">Platform top up game terpercaya dengan harga termurah dan proses instan.</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Layanan</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Bantuan</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((help, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">{help}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope"></i>
                <span className="text-blue-100">support@nextplay.id</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone"></i>
                <span className="text-blue-100">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-map-marker-alt"></i>
                <span className="text-blue-100">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-300 mt-12 pt-8 text-center">
          <p className="text-blue-100">© 2024 NextPlay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;