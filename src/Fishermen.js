import "./Fishermen.css";
import image9Arrow from "./assets/image9Arrow.png";
const Fishermen = () => {
  return (
    <div className="fishermen">
      <img className="image-9Arrow" src={image9Arrow} alt="9" />
      <center><h4 className="national-scheme-of-w">
        NATIONAL SCHEME OF WELFARE OF FISHERMEN
      </h4></center>
      <div className="flex-container">
        <div className="rectangle-39">
        <p>
          The Centrally Sponsored 'National Scheme of Welfare of Fishermen'
          provided financial assistance to fishers for construction of house
          among other things.</p>
          </div></div>
          <div className="flex-container">
            <div className="rectangle-39">
                <p><b>Eligibility</b> </p><p>1. Beneficiary should be a member of
          a functional local fishers cooperative
          society&#x2F;Federation&#x2F;any other registered body. </p><p>2. Beneficiary
          should be Below Poverty Line (BPL) and of between 18 and 60 years of
          age. </p><p>3. Engaged in full-time fishing in the sea. </p></div></div>
          <div className="flex-container">
            <div className="rectangle-39"><p><b>Document Required</b> </p><p>1.
          Aadhaar Card </p><p>2. Voter ID Card</p><p>3. Income Certificate </p><p>4. Registration as
          a fisherman under the State or Central Government
        </p>
        </div>
      </div>
       <button className="rectangle-28">
       <p className="apply">Apply</p>
     </button>
    </div>
  );
};
export default Fishermen;