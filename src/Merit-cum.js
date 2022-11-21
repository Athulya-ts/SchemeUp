import "./App.css";
import image9Arrow from "./assets/image9Arrow.png";
import './Merit-cum.css';

const Merit = () => {
  return (
    <div className="merit-cum">
      <img className="image-9" src={image9Arrow} alt="9"/>
      <center><h3>
        SCHEME OF MERIT CUM MEANS BASED SCHOLARSHIP
      </h3></center>
      <div className="rectangle-33">
        <span className="the-objective-of-the">
          The objective of the Scheme is to provide financial assistance to the
          poor and meritorious students belonging to minority communities to
          enable them to pursue professional and technical courses.
        </span>
      </div>
        <div className="rectangle-34" >
        <span className="eligibility-to-be-e">
          <p><b><u>Eligibility</u></b></p><p> To be eligible, an applicant must - </p><p>1. belong to
          Minority communities (Muslims, Sikhs, Christians, Buddhists, Jain, and
          Parsis&#x2F;Zoroastrians) </p><p>2. be pursuing a technical or professional
          course at the undergraduate or postgraduate level from a recognized
          institution</p><p> 3. have secured at least 50% marks or equivalent grade in
          the previous final examination </p><p>4. have an annual family income of less
          than INR 2.50 lakhs from all sources </p><p><b><u>Document Required</u></b></p><p> 1. Domicile
          Certificate </p><p>2. Student Photograph </p><p>3. Self Declaration of minority
          community certificate by the student </p><p>4. Self-attested copy of previous
          academic marksheet</p><p> 5. Fee receipt of current course year </p><p>6. Scanned
          copy of Aadhar Enrollment&#x2F;Aadhar Card </p><p>7. Income certificate
          issued by designated state&#x2F;UT authority</p><p> 8. Proof of bank account
          in the name of the student or joint account with mother&#x2F;father</p>
        </span>
      </div>
      <button className="rectangle-28">
        <span className="apply">Apply</span>
      </button>
    </div>
  );
};
export default Merit;
