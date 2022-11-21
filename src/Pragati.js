import "./Pragati.css";
import image9Arrow from "./assets/image9Arrow.png";
const Pragati = () => {
  return (
    <div className="pragati">
      <img className="image-9" src={image9Arrow} alt="9"/>
      <span className="pragati-scholarship">
        PRAGATI SCHOLARSHIP SCHEME FOR GIRLS STUDENT
      </span>
        <div className="rectangle-33">
          <span className="pragati-is-a-mhrd-sc">
            <p>Pragati is a MHRD Scheme being implemented by of AICTE aimed at
            providing assistance for Advancement of Gsirls pursuing Technical
            Education. </p>
            <p><b>Amount of scholarship:</b> Tuition Fee of Rs. 30,000&#x2F;-
            or at actual, whichever is less and Rs.2000&#x2F;- per month for 10
            months as incidentals charges each year. In case of Tuition fee
            waiver&#x2F;reimbursement, Students are eligible to get an amount of
            Rs. 30,000&#x2F;- for the purchase of
            Books&#x2F;Equipment&#x2F;Softwares&#x2F;
            Laptop&#x2F;Desktop&#x2F;Vehicle&#x2F;Fee paid towards competitive
            examination applications forms&#x2F;exam.</p>
          </span>
        </div>
      <div className="rectangle-32">
        <span className="reservation-15-for">
          <p><b>Reservation-</b> 15% for SC, 7.5% for ST and 27% for OBC
          candidate&#x2F;applicant. </p><p><b>Document Required :</b>1. Mark Sheet of standard
          Xth &#x2F;XIIth &#x2F; others as applicable.</p><p> 2. Annual family Income
          Certificate for the preceding financial year in the prescribed format
          issued by not below the rank of Tahsildar. </p><p>3. Admission letter issued
          by Directorate of Technical Education for the admission in
          Diploma&#x2F;Degree course.</p> <p>4. Certificate issued by the
          Director&#x2F;Principal&#x2F; Head of the Institute.</p>
        </span>
      </div>
      <br></br>
      <button className="rectangle-28">
        <span className="apply">Apply</span>
      </button>
    </div>
  );
};
export default Pragati;
