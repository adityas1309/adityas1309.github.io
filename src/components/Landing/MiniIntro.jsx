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
                fontFamily: "'Roslindale', 'Times New Roman', sans-serif",
                fontSize: "clamp(36px, 10vw, 88px)", 
                fontWeight: "400",
                lineHeight: "1.1",
              }}
            >
              <div className="inline-flex flex-wrap justify-center items-center gap-3">
                <span>I</span>
                <div
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "10vw",
                    height: "10vw",
                    maxWidth: "4rem",
                    maxHeight: "4rem",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="/assets/mypic1.jpg"
                    alt="Pic1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>chased curiosity</span>
              </div>

              <div className="inline-flex flex-wrap justify-center items-center gap-3">
                <span>through</span>
                <div
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "10vw",
                    height: "10vw",
                    maxWidth: "4rem",
                    maxHeight: "4rem",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="/assets/mypic2.jpg"
                    alt="Pic2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>code until it</span>
              </div>

              <div className="inline-flex flex-wrap justify-center items-center gap-3">
                <span>became creation...</span>
                <div
                  className="transition-transform duration-300 ease-in-out transform hover:scale-110"
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "10vw",
                    height: "10vw",
                    maxWidth: "4rem",
                    maxHeight: "4rem",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="/assets/mypic3.jpg"
                    alt="Pic3"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </h1>
          </div>

          <p
            style={{
              color: "#f3f6fa",
              fontFamily: "Mint Grotesk, sans-serif",
              fontSize: "clamp(14px, 2vw, 16px)", 
              fontWeight: "500",
              lineHeight: "1.6",
              padding: "0 10px",
            }}
          >
            Aditya Singh is a frontend developer, problem solver, and creative technologist from India. His work focuses on crafting interactive and visually engaging user experiences using modern web technologies. With a passion for design and innovation, he blends aesthetics with functionality to build seamless digital experiences. His love for frontend development has expanded into exploring 3D web experiences, animations, and immersive user interfaces, which are his primary creative pursuits today.
          </p>

          <button className="mt-6 text-white border border-white py-2 px-6 text-lg rounded-lg hover:bg-white hover:text-black transition-colors">
            READ MY STORY
          </button>
        </div>
      </div>
    </div>
  );
}
