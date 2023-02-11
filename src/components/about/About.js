import "./About.css";

export default function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about-decription">
          <div className="about-wwr">
            <h1 className="heading-one">WHO WE ARE</h1>
            <p className="paragraph-one">
              Rubixe<sup>TM</sup> is a global technology company specializing in
              disruptive technologies - <br /> Artificial Intelligence (AI),
              Machine Learning, Robotic Process Automation (RPA),
              <br /> BlockChain, and Internet of Things (IoT).
            </p>

            <p className="paragraph-two">
              Rubixe<sup>TM</sup> mission is to enable businesses to leverage
              the full potential of disruptive
              <br /> technologies and stay competitive in the market, turning
              complex challenges into
              <br />
              solutions, providing a strategic competitive advantage that are
              more efficient, effective <br />
              and predictable.
            </p>
          </div>
        </div>
        <div className="about-image">
          <div className="overlaybox"></div>
          <div className="overlaybox-one"></div>
        </div>
      </div>
      <div className="wwd">
        <div className="wwd-description">
          <h1 className="heading-two">WHERE WE STARTED</h1>
          <p className="paragraph-three">
            We started in 2015, With a passionate team who want to bring
            game-changing solutions through disrupting technologies. We
            expertise in delivering enterprise-level solutions in the field of
            Artificial Intelligence (AI), Cyber Security, Robotic Process
            Automation (RPA), Internet of Things (loT), and BlockChain
            technology.
          </p>
        </div>
      </div>
    </div>
  );
}
