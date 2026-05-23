import "../../styles/sound.css";
import "../../index.css";

export default function SoundSection() {
  return (
    <section className="sound">
      <img src="/images/fekvo.png" alt="Sound" className="soundimg" />
      <div className="stickycontent">
        <div className="little-text">
          <h3>Részletek, amiket eddig sosem hallottál</h3>
          <p>Kettős processzoros Aktív Zajszűrés - ANC</p>
          <p>40 mm-es neodímium mágneses meghajtók</p>
          <p>Akusztikus memóriahab szigetelés</p>
        </div>
      </div>
    </section>
  );
}
