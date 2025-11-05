
import React from 'react';
import Header from './components/Header';
import FacilityCard from './components/FacilityCard';
import { WifiIcon, AirVentIcon, ShowerHeadIcon, CookingPotIcon, MapPinIcon, PhoneIcon } from './components/icons';

const App: React.FC = () => {

  const facilities = [
    { icon: <WifiIcon />, name: "Free Wi-Fi Cepat" },
    { icon: <AirVentIcon />, name: "Kamar Ber-AC" },
    { icon: <ShowerHeadIcon />, name: "Kamar Mandi Dalam" },
    { icon: <CookingPotIcon />, name: "Dapur Bersama" },
  ];

  const galleryImages = [
    "https://picsum.photos/seed/kamar1/800/600",
    "https://picsum.photos/seed/kamar2/800/600",
    "https://picsum.photos/seed/lingkungan1/800/600",
    "https://picsum.photos/seed/dapur/800/600",
    "https://picsum.photos/seed/depan/800/600",
    "https://picsum.photos/seed/kamar3/800/600",
  ];

  const WHATSAPP_NUMBER = "6288809783135"; // Placeholder number

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative text-white pt-32 pb-20 md:pt-40 md:pb-28 text-center bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://picsum.photos/seed/hero/1920/1080')"}}>
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Selamat Datang di Kontrakan dan kostan Rozak</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Hunian nyaman, modern, dan strategis untuk mahasiswa dan pekerja.</p>
            <a
              href="#kontak"
              className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Hubungi Kami
            </a>
          </div>
        </section>

        {/* Fasilitas Section */}
        <section id="fasilitas" className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-4">Fasilitas Unggulan</h2>
            <p className="text-center text-lg max-w-2xl mx-auto mb-12">Kami menyediakan fasilitas terbaik untuk menunjang kenyamanan Anda.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.map((facility, index) => (
                <FacilityCard key={index} icon={facility.icon} name={facility.name} />
              ))}
            </div>
          </div>
        </section>

        {/* Galeri Section */}
        <section id="galeri" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">Galeri Kost Barokah</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3">
                   <img src={src} alt={`Galeri Kost ${index + 1}`} className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Lokasi Section */}
        <section id="lokasi" className="py-20 bg-light">
          <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Lokasi Strategis</h2>
             <div className="flex justify-center items-center mb-4 text-primary">
                <MapPinIcon />
             </div>
             <p className="text-lg mb-4">Jl. Mampang Prapatan XV No 28, Rt 006, Rw 005, Kecamatan Pancoran, Kelurahan Duren Tiga, Jakarta Selatan</p>
             <a 
               href="https://maps.app.goo.gl/ScPAfU6FyabDSKXK6" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-primary hover:text-primary-hover font-semibold transition duration-300"
              >
                Lihat di Google Maps &rarr;
              </a>
          </div>
        </section>

        {/* Kontak Section */}
        <section id="kontak" className="py-20 bg-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tertarik untuk Menyewa?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">Jangan ragu untuk menghubungi kami. Klik tombol di bawah untuk langsung terhubung via WhatsApp.</p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              <PhoneIcon />
              <span className="ml-3">Hubungi via WhatsApp</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-dark text-center py-6">
        <div className="container mx-auto px-4 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kost Barokah. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
