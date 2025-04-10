import { FaRobot } from 'react-icons/fa';
import { MdEmergency } from 'react-icons/md';
import bgImage from '../assets/hero-bg.jpg'; // Put your image in src/assets/

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <div className="relative z-10 max-w-7xl w-full px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* LEFT SECTION (unchanged) */}
        <div className="text-white">
          <h1 className="text-5xl font-extrabold leading-tight">
            Find the Best <br /> Healthcare with <br />
            <span className="text-pink-400 underline">CureConnect</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Your all-in-one healthcare companion powered by AI. Get instant medical guidance, find nearby healthcare facilities, and access emergency services.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl shadow-md transition">
              Get Started →
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-pink-600 transition">
              Learn More
            </button>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              🛡 HIPAA Compliant
            </div>
            <div className="flex items-center gap-2">
              ❤️ Trusted by 10K+ Patients
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (newly arranged cards) */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="bg-white p-6 w-64 rounded-2xl shadow-xl flex items-center gap-4">
            <FaRobot className="text-3xl text-pink-600" />
            <div>
              <p className="text-gray-800 font-semibold">AI Health Assistant</p>
            </div>
          </div>

          <div className="bg-white p-6 w-64 rounded-2xl shadow-xl flex items-center gap-4">
            <MdEmergency className="text-3xl text-red-600" />
            <div>
              <p className="text-gray-800 font-semibold">Emergency Help</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
