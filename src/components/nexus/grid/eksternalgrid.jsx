import React from "react";
import Kadin from "../../../assets/dinas nexus/press release/eksternal/ijon.webp";
import Sekdin from "../../../assets/dinas nexus/press release/eksternal/kiya.webp";
import Rintan from "../../../assets/dinas nexus/staff release/eksternal/rintan.webp";
import Rapip from "../../../assets/dinas nexus/staff release/eksternal/rapip.webp";
import Ima from "../../../assets/dinas nexus/staff release/eksternal/ima.webp";
import Diaz from "../../../assets/dinas nexus/staff release/eksternal/diaz.webp";
import Bendin from "../../../assets/dinas nexus/staff release/eksternal/ghina.webp";
import Hapsa from "../../../assets/dinas nexus/staff release/eksternal/hapsa.webp";
import Eksternal from "../../../assets/dinas nexus/logo/eksternal.png";
import Social from "../../social"; // Tambahkan import ini

const gridData = [
  {
    img: Bendin,
    title: "Bendahara Dinas",
    nama: "Ghina Tsary Ananta",
    desc: "Sistem Informasi 2023",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/ghinatsaa_/",
    linkedin: "https://www.linkedin.com/in/ghina-tsary-ananta-b50418280/",
  },
  {
    img: Sekdin,
    title: "Sekretaris Dinas",
    nama: "Zakiya Aulia",
    desc: "Sistem Informasi 2023",
    border: "border-blue-500",
    instagram: "https://www.instagram.com/zakiyaaaulia/",
    linkedin: "https://www.linkedin.com/in/zakiya-aulia-498245288/",
  },
  {
    img: Kadin,
    title: "Kepala Dinas",
    nama: "Ervizon Fariz",
    desc: "Sistem Informasi  2023",
    border: "border-green-800",
    instagram: "https://www.instagram.com/ervizonf/",
    linkedin: "https://www.linkedin.com/in/ervizon-fariz-106477288/",
    github: "https://github.com/ervizon",
  },
  {
    img: Rintan,
    title: "Staff Dinas",
    nama: "Rintan Amorade",
    desc: "Teknik Komputer 2023",
    border: "border-red-500",
    instagram: "https://www.instagram.com/rintanamorade_/",
    linkedin: "https://www.linkedin.com/in/rintan-amorade-09240a280/",
  },
  {
    img: Rapip,
    title: "Staff Dinas",
    nama: "Naufal Rafiif Irwan",
    desc: "Teknik Komputer 2023",
    border: "border-purple-500",
    instagram: "https://www.instagram.com/rapip_n/",
    linkedin: "https://www.linkedin.com/in/naufal-rafiif-irwan-5a4276288/",
    github: "https://github.com/rapipn02",
  },
  {
    img: Ima,
    title: "Staff Dinas",
    nama: "Izzatul Mahdiyah",
    desc: "Teknik Komputer 2024",
    border: "border-yellow-500",
    instagram: "https://www.instagram.com/izzahmahdiyah_/",
    linkedin: "https://www.linkedin.com/in/izzatul-mahdiyah-2637b931b/",
  },
  {
    img: Diaz,
    title: "Staff Dinas",
    nama: "Muhammad Diaz Ananda S",
    desc: "Sistem Informasi 2023",
    border: "border-red-500",
    instagram: "https://www.instagram.com/diaznnd_/",
    linkedin:
      "https://www.linkedin.com/in/muhammad-diaz-ananda-syukri-829629287/",
    github: "https://github.com/diaznnd",
  },
  {
    img: Hapsa,
    title: "Staff Dinas",
    nama: "Dzakira Hapsarini",
    desc: "Teknik Komputer 2024",
    border: "border-pink-500",
    instagram: "https://www.instagram.com/dzakiirra/",
    linkedin: "https://www.linkedin.com/in/dzakira-hapsarini-060b0231b/",
    github: "https://github.com/Dzakira23",
  },
];

export const EksternalGrid = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {gridData.map((item, idx) => (
          // Wrapper untuk AOS
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={idx * 100}
          >
            {/* Card untuk hover effect */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg w-[300px] overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110">
              {/* Header background */}
              <div
                className="w-40 h-28 relative"
                style={{
                  backgroundImage: `url(${Eksternal})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Foto bulat */}
                <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
                  <img
                    src={item.img}
                    alt={item.nama}
                    className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                </div>
              </div>
              {/* Konten */}
              <div className="pt-12 pb-4 px-4 flex flex-col items-center">
                <span className="font-bold font-[Carena] text-xl text-[#25364a] text-center">
                  {item.nama}
                </span>
                <span className="text-sm font-semibold font-[Poppins] text-gray-500 mb-2 text-center">
                  {item.title}
                </span>
                <p className="text-xs font-bold text-gray-600 text-center mb-4">
                  {item.desc}
                </p>
                {/* Social icons */}
                <Social
                  instagram={item.instagram}
                  linkedin={item.linkedin}
                  github={item.github}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EksternalGrid;
