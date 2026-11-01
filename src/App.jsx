
import { useState } from "react";

import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Memory from "./components/Memory";
import VideoSection from "./components/VideoSection";
import BirthdayLetter from "./components/BirthdayLetter";
import Finale from "./components/Finale";

function App() {
  const [currentPage, setCurrentPage] = useState("envelope");

  return (
    <>
      {currentPage === "envelope" && (
        <Envelope onOpen={() => setCurrentPage("hero")} />
      )}

      {currentPage === "hero" && (
        <Hero onContinue={() => setCurrentPage("gallery")} />
      )}

      {currentPage === "gallery" && (
        <Gallery onContinue={() => setCurrentPage("memory")} />
      )}

      {currentPage === "memory" && (
        <Memory onContinue={() => setCurrentPage("video")} />
      )}

      {currentPage === "video" && (
        <VideoSection onContinue={() => setCurrentPage("letter")} />
      )}

      {currentPage === "letter" && (
        <div className="min-h-screen flex items-center justify-center bg-[#FFF9F6]">
          <h1 className="text-3xl text-[#49332F]">
            A letter for Kamsi ❤️
          </h1>
        </div>
      )}

      {currentPage === "letter" && (
        <BirthdayLetter
        onContinue={() => setCurrentPage("finale")}
        />
      )}

      {currentPage === "finale" && (
        <div className="min-h-screen flex items-center justify-center bg-[#FFF9F6]">
          <h1 className="text-3xl text-[#49332F]">
            One last surprise ❤️
          </h1>
        </div>
      )}

      {currentPage === "finale" && (
        <Finale
          onReplay={() => setCurrentPage("envelope")}
        />
      )}
    </>
  );
}

export default App;
