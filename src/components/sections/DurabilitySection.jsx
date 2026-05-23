import "../../styles/durability.css";
import "../../index.css";

export default function DurabilitySection() {
  return (
    <section className="durability">
      <div className="sticky">
        <div className="little-text">
          <h3>A tartósság a részletekben rejlik</h3>
          <p>Több, mint 150 precíziósan illesztett alkatrész</p>
        </div>
        <img src="/images/kozeli.png" alt="Durability" className="durabilityimg" />
      </div>
    </section>
  );
}
