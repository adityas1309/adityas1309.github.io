import React from "react";

export default function MiniIntro() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          
          <div className="relative inline-block">
            <h1
              style={{
                marginTop: "0",
                marginBottom: "16px",
                fontFamily: "'Roslindale', 'Times New Roman', sans-serif",
                fontSize: "88px",
                fontWeight: "400",
                lineHeight: "1",
              }}
            >
              <div className="inline-flex items-center gap-3">
                <span>I</span>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src="/assets/mypic1.jpg"
                    alt="Pic1"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <span>chased curiosity</span>
              </div>

              <div className="inline-flex items-center gap-3">
                <span>through</span>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src="/assets/mypic2.jpg"
                    alt="Pic2"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <span>code until it</span>
              </div>

              <div className="inline-flex items-center gap-3">
                <span>became creation...</span>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <img
                    src="/assets/mypic3.jpg"
                    alt="Pic3"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            </h1>
          </div>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mt-12">
          Aditya Singh is a frontend developer, problem solver, and creative technologist from India. His work focuses on crafting interactive and visually engaging user experiences using modern web technologies. With a passion for design and innovation, he blends aesthetics with functionality to build seamless digital experiences. His love for frontend development has expanded into exploring 3D web experiences, animations, and immersive user interfaces, which are his primary creative pursuits today.
          </p>

          <button className="mt-8 text-white border border-white py-2 px-6 text-lg rounded-lg hover:bg-white hover:text-black transition-colors">
            READ MY STORY
          </button>
        </div>
      </div>
    </div>
  );
}
