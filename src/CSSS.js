import "./CSSS.css";
import image9Arrow from "./assets/image9Arrow.png";
const CSSS = () => {
  return (
    <div className="csss">
      <img className="image-9Arrow" src={image9Arrow} alt="9"/>
      <center><h4>
        CENTRAL SECTOR SCHEME OF SCHOLARSHIP FOR COLLEGE AND UNIVERSITY STUDENTS
        </h4></center>
      <div className="flex-container">
        <div className="rectangle-41">
        <p>
          It was introduced to provide financial assistance to the meritorious
          students, to meet a part of their day-to-day expenses while pursuing
          higher studies.</p>
          </div>
      </div>
      <div className="flex-container">
        <div className="rectangle-41">
            <p><b> Eligibility</b></p><p>1. Students who are above 80th percentile
          of successful candidates in the relevant stream from a particular
          Board of Examination in Class XII </p><p>2. Pursuing regular course </p><p>3.
          Having family income of less than Rs.6 lakh per annum </p><p>4. Not
          receiving any other scholarship</p>
          </div>
          </div>
          <div className="flex-container">
            <div className="rectangle-42">
                <p><b> Document Required</b></p><p> 1. Aadhaar card </p><p>2.
          Class 12th marksheet</p><p> 3. Income certificate</p>
          </div>
          </div>
      <button className="rectangle-28">
        <p className="apply">Apply</p>
      </button>
    </div>
  );
};
export default CSSS;