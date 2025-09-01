import { useState, useEffect } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // Auto-open chat after 5 seconds (only once)
  useEffect(() => {
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setShowNotification(false);
        setHasAutoOpened(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);

  // Get greeting based on time of day
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 12) return "Goedemorgen 👋";
    if (hours >= 12 && hours < 18) return "Goedemiddag 👋";
    return "Goedenavond 👋";
  };

  const openChat = () => {
    setIsOpen(true);
    setShowNotification(false);
  };

  const closeChat = () => {
    setIsOpen(false);
    setShowNotification(true); // Badge komt terug na sluiten
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@jukoautomation.nl";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/31622035459", "_blank");
  };

  const handlePhone = () => {
    window.location.href = "tel:+31622035459";
  };

  return (
    <>
      {/* Chat Toggle Button - exact zoals origineel */}
      <button
        onClick={openChat}
        className={`fixed bottom-4 right-5 z-[1099] w-14 h-14 text-2xl border-none rounded-full cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.2)] ${
          isOpen ? "hidden" : "flex"
        } items-center justify-center text-white`}
        style={{ background: "#20c997" }}
        aria-label="Open chat"
      >
        💬
        {/* Notification badge - exact zoals origineel */}
        {showNotification && (
          <span 
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold"
            style={{ fontSize: "12px" }}
          >
            1
          </span>
        )}
      </button>

      {/* Chatbot - exact zoals origineel */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 z-[1100] flex flex-col items-start">
          <div className="relative">
            {/* Close button - exact zoals origineel */}
            <button
              onClick={closeChat}
              className="absolute -top-3 -right-3 w-[26px] h-[26px] bg-[#1d1d1b] text-white border-none rounded-full cursor-pointer text-lg leading-[26px] flex items-center justify-center"
              aria-label="Sluit"
            >
              ×
            </button>

            {/* Chat balloon - exact zoals origineel */}
            <div 
              className="bg-white rounded-xl p-[14px_16px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex gap-3 items-center mb-[10px]"
              style={{ maxWidth: "360px" }}
            >
              <img
                src="/justin.png"
                alt="Justin"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              />
              <div>
                <div className="text-sm md:text-base font-semibold text-black">Justin</div>
                <div className="text-xs md:text-sm text-black block mt-1 leading-[1.4]">
                  van <span className="font-semibold">Juko Automation</span>
                </div>
                <div className="text-xs md:text-sm text-black block mt-1 leading-[1.4]">
                  {getGreeting()}
                  <br />
                  Heb je een vraag? Ik help je graag verder via:
                </div>
              </div>
            </div>

            {/* Action buttons - exact zoals origineel */}
            <div className="grid grid-cols-2 gap-[10px] justify-center">
              <button
                onClick={handleEmail}
                className="bg-white border border-black rounded-[999px] py-[10px] md:py-[14px] px-[20px] md:px-[26px] font-medium text-sm md:text-base cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-[0.2s] text-center whitespace-nowrap w-full hover:bg-[#8e8e8e]"
              >
                E-mail
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="border-none rounded-[999px] py-[10px] md:py-[14px] px-[20px] md:px-[26px] font-medium text-sm md:text-base cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-all duration-200 text-center whitespace-nowrap w-full text-white"
                style={{ background: "#20c997" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1aa179";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#20c997";
                }}
              >
                WhatsApp
              </button>
              
              <button
                onClick={handlePhone}
                className="col-span-2 justify-self-center w-1/2 bg-white border border-black rounded-[999px] py-[10px] md:py-[14px] px-[20px] md:px-[26px] font-medium text-sm md:text-base cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.08)] transition-[0.2s] text-center whitespace-nowrap hover:bg-[#8e8e8e]"
              >
                Bellen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
