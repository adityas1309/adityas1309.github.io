import React from "react";

export default function MiniIntro() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          
          <div className="relative inline-block">
            <h1
              style={{
                marginTop: "0",
                marginBottom: "16px",
                fontFamily: "'EB Garamond', 'Times New Roman', sans-serif",
                fontSize: "clamp(36px, 10vw, 88px)",
                fontWeight: "400",
                lineHeight: "1.1",
              }}
            >
              
              <div className="inline-flex flex-wrap justify-center items-center gap-4">
                <span>I</span>
                <div className="relative inline-block cursor-pointer group">
                  <img
                    src="assets/mypic1.jpg"
                    alt="Pic1"
                    className="w-[14vw] h-[14vw] max-w-[6rem] max-h-[6rem] rounded-2xl object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-180 group-hover:rotate-[-6deg]"
                  />
                </div>
                <span>chased curiosity</span>
              </div>

              
              <div className="inline-flex flex-wrap justify-center items-center gap-4">
                <span>through</span>
                <div className="relative inline-block cursor-pointer group">
                  <img
                    src="assets/mypic2.jpg"
                    alt="Pic2"
                    className="w-[14vw] h-[14vw] max-w-[6rem] max-h-[6rem] rounded-2xl object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-180 group-hover:rotate-[6deg]"
                  />
                </div>
                <span>code until it</span>
              </div>

              <div className="inline-flex flex-wrap justify-center items-center gap-4">
                <span>became creation...</span>
                <div className="relative inline-block cursor-pointer group">
                  <img
                    src="assets/mypic3.jpg"
                    alt="Pic3"
                    className="w-[14vw] h-[14vw] max-w-[6rem] max-h-[6rem] rounded-2xl object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-180 group-hover:rotate-[-3deg]"
                  />
                </div>
              </div>
            </h1>
          </div>

          <p
            style={{
              color: "#f3f6fa",
              fontFamily: "Safiro, sans-serif",
              fontSize: "clamp(14px, 2vw, 16px)", 
              fontWeight: "500",
              lineHeight: "1.6",
              padding: "0 10px",
            }}
          >
            I am a frontend developer, problem solver, and creative technologist from India. My work focuses on crafting interactive and visually engaging user experiences using modern web technologies. I blend aesthetics with functionality to build seamless digital experiences. My love for frontend development has expanded into exploring 3D web experiences, animations, and immersive user interfaces, which are my primary creative pursuits today.
          </p>

          <button className="mt-6 text-white border border-white py-2 px-6 text-lg rounded-lg hover:bg-white hover:text-black transition-colors">
            READ MY STORY
          </button>
        </div>
      </div>
    </div>
  );
}
