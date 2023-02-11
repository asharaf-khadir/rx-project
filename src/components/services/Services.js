import "./Services.css";
import aicomputer from "../images/ai-computer.png"
import aichip from "../images/ai-chipos.png"
import aibrain from "../images/ai-brainos.png"
import aimen from "../images/ai-men.png"
import aiteach from "../images/ai-teachos.png"

export default function Services() {
  return (
    <div>
      <div className="card">
        <div className="card-title">
          <p>TECH FOR TEENS - A RUBIXE &reg; INITATIVE</p>
        </div>
        <div className="cards">
          <div className="cards-up-one">
            <div className="number-circle">
              <div className="number-cirlce-no">
                <h4 className="numbers">01</h4>
              </div>
            </div>
            <img src={aicomputer} alt="AI pic"></img>
            <p>
              Introducing AI to
              <br />
              children in an age
              <br />
              appropriate manner
            </p>
          </div>
          <div className="cards-down-one">
            <p>
              Gain awareness
              <br />
              on AI and build an <br />
              interactive story
              <br />
              around it
            </p>
            <img src={aichip} alt="AI pic"></img>
            <div className="circle-number-down1">
              <div className="cirlce-numberd1">
                <h4>02</h4>
              </div>
            </div>
          </div>
          <div className="cards-up-two">
            <div className="number-circle1">
              <div className="number-cirlce-no1">
                <h4 className="numbers1">03</h4>
              </div>
            </div>
            <img src={aibrain} alt="AI pic"></img>
            <p>
              Acquire
              <br />
              programming skills
              <br />
              in a user-friendly
              <br />
              format
            </p>
          </div>
          <div className="cards-down-two">
            <p>
              Expose to mini
              <br />
              projects on <br />
              diverse topics
            </p>
            <img src={aimen} alt="AI pic"></img>
            <div className="circle-number-down2">
              <div className="cirlce-numberd2">
                <p>04</p>
              </div>
            </div>
          </div>
          <div className="cards-up-three">
            <div className="number-circle3">
              <div className="number-cirlce-no3">
                <h4 className="numbers3">05</h4>
              </div>
            </div>
            <img src={aiteach} alt="AI pic"></img>
            <p>
              Train the teachers
              <br />
              programme
            </p>
          </div>
        </div>
        {/* <p className="card-title">TECH FOR TEENS - A RUBIXE &reg; INITATIVE</p>
        <div className="cards">
          <div className="card-upwards">
            <div className="card-image"></div>
            <h4 className="card-title">
              Introducing AI to
              <br /> children in an age
              <br /> appropriate
            </h4>
          </div>
        </div> */}
      </div>
    </div>
  );
}
