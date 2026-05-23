import { useState } from "react";
import "../../styles/appearance.css";
import "../../index.css";

export default function AppearanceSection({}) {
  const [bgState, setBgState] = useState("radial-gradient(circle, rgb(255, 229, 198) 10%, rgb(255, 216, 157) 70%)");
  const [activeImage, setActiveImage] = useState("/images/hero.png");
  const handleColorChange = (backgroundColor, imagePath) => {
    setBgState(backgroundColor);
    setActiveImage(imagePath);
  };

  return (
    <section
      className="appearance section"
      style={{
        background: bgState,
        transition: "background 0.5s ease",
      }}
    >
      <div className="big-text">ALAKíTSD</div>

      <img src={activeImage} alt="Fejhallgató variáció" className="appearance-image" />

      <div className="buttons">
        {/* BÉZS FEJHALLGATÓ */}
        <button
          aria-label="Bézs szín kiválasztása"
          onClick={() =>
            handleColorChange(
              "radial-gradient(circle, rgb(255, 229, 198) 10%, rgb(255, 216, 157) 70%)",
              "/images/hero.png"
            )
          }
          style={{ backgroundColor: "#ffecd6" }}
        />

        {/* PINK FEJHALLGATÓ */}
        <button
          aria-label="Pink szín kiválasztása"
          onClick={() =>
            handleColorChange(
              "radial-gradient(circle, rgb(255, 218, 253) 10%, rgb(231, 169, 233) 70%)",
              "/images/rozsaszin.png"
            )
          }
          style={{ backgroundColor: "#f9c7fc" }}
        />

        {/* ARANYBARNA FEJHALLGATÓ */}
        <button
          aria-label="Aranybarna szín kiválasztása"
          onClick={() =>
            handleColorChange(
              "radial-gradient(circle, rgb(219, 196, 167) 20%, rgb(216, 170, 100) 70%)",
              "/images/arany.png"
            )
          }
          style={{ backgroundColor: "#c9ac6e" }}
        />

        {/* SÖTÉTSZÜRKE FEJHALLGATÓ */}
        <button
          aria-label="Sötétszürke szín kiválasztása"
          onClick={() =>
            handleColorChange(
              "radial-gradient(circle, rgb(207, 207, 207) 20%, rgb(146, 146, 146) 80%)",
              "/images/fekete.png"
            )
          }
          style={{ backgroundColor: "#969696" }}
        />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Kezdőlapra görgetés"
        fill="none"
        viewBox="0 0 14 14"
        className="scrollup"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <g id="Free Remix/Interface Essential/line-arrow-up-dashed-square--arrow-keyboard-button-up-square-dashes">
          <path
            fill="#8b5f00"
            fillRule="evenodd"
            d="M1.625 2c0 -0.20711 0.16789 -0.375 0.375 -0.375h0.5c0.34518 0 0.625 -0.27982 0.625 -0.625 0 -0.345178 -0.27982 -0.625 -0.625 -0.625H2C1.10254 0.375 0.375 1.10254 0.375 2v0.5c0 0.34518 0.279822 0.625 0.625 0.625 0.34518 0 0.625 -0.27982 0.625 -0.625V2Zm5.13576 1.42242c-0.07372 0.0305 -0.14278 0.07572 -0.2027 0.13564l-2 2c-0.24408 0.24408 -0.24408 0.6398 0 0.88388 0.24408 0.24408 0.6398 0.24408 0.88388 0l0.93306 -0.93306V10c0 0.3452 0.27982 0.625 0.625 0.625s0.625 -0.2798 0.625 -0.625V5.50888l0.93306 0.93306c0.24408 0.24408 0.6398 0.24408 0.88388 0 0.24408 -0.24408 0.24408 -0.6398 0 -0.88388l-2 -2C7.3199 3.43602 7.15995 3.375 7 3.375c-0.08474 0 -0.16555 0.01687 -0.23924 0.04742ZM1 10.875c0.34518 0 0.625 0.2798 0.625 0.625v0.5c0 0.2071 0.16789 0.375 0.375 0.375h0.5c0.34518 0 0.625 0.2798 0.625 0.625s-0.27982 0.625 -0.625 0.625H2c-0.89746 0 -1.625 -0.7275 -1.625 -1.625v-0.5c0 -0.3452 0.279822 -0.625 0.625 -0.625Zm5 1.5c-0.34518 0 -0.625 0.2798 -0.625 0.625s0.27982 0.625 0.625 0.625h2c0.34518 0 0.625 -0.2798 0.625 -0.625s-0.27982 -0.625 -0.625 -0.625H6Zm7 -1.5c0.3452 0 0.625 0.2798 0.625 0.625v0.5c0 0.8975 -0.7275 1.625 -1.625 1.625h-0.5c-0.3452 0 -0.625 -0.2798 -0.625 -0.625s0.2798 -0.625 0.625 -0.625h0.5c0.2071 0 0.375 -0.1679 0.375 -0.375v-0.5c0 -0.3452 0.2798 -0.625 0.625 -0.625ZM13.625 6c0 -0.34518 -0.2798 -0.625 -0.625 -0.625s-0.625 0.27982 -0.625 0.625v2c0 0.34518 0.2798 0.625 0.625 0.625s0.625 -0.27982 0.625 -0.625V6ZM1 5.375c0.34518 0 0.625 0.27982 0.625 0.625v2c0 0.34518 -0.27982 0.625 -0.625 0.625 -0.345178 0 -0.625 -0.27982 -0.625 -0.625V6c0 -0.34518 0.279822 -0.625 0.625 -0.625ZM5.375 1c0 -0.345178 0.27982 -0.625 0.625 -0.625h2c0.34518 0 0.625 0.279822 0.625 0.625 0 0.34518 -0.27982 0.625 -0.625 0.625H6c-0.34518 0 -0.625 -0.27982 -0.625 -0.625ZM11.5 0.375c-0.3452 0 -0.625 0.279822 -0.625 0.625 0 0.34518 0.2798 0.625 0.625 0.625h0.5c0.2071 0 0.375 0.16789 0.375 0.375v0.5c0 0.34518 0.2798 0.625 0.625 0.625s0.625 -0.27982 0.625 -0.625V2c0 -0.89746 -0.7275 -1.625 -1.625 -1.625h-0.5Z"
            clipRule="evenodd"
            strokeWidth="1"
          ></path>
        </g>
      </svg>
    </section>
  );
}
