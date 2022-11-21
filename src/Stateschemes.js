import "./Stateschemes.css";
import image27 from "./assets/image27.png";
import image36 from "./assets/image36.png";
import image33 from "./assets/image33.png";
import image11 from "./assets/image11.png";
import image26 from "./assets/image26.png";
import image21 from "./assets/image21.png";
import image23 from "./assets/image23.png";
import image9Arrow from "./assets/image9Arrow.png";
import image37 from "./assets/image37.png";
const Stateschemes = () => {
  return (
    <div className="state-schemes">
      <div className="flex-container">
        <img className="image-9Arrow" src={image9Arrow} alt="9"/>
        <img className="image-33" src={image33} alt="33" />
      </div>
      <div className="rectangle-19">
        <div className="flex-container-1">
          <span className="scholarship-for-diff">
            {" "}
            Scholarship for Differently Abled Students from Class 9th Onwards,
            Tamil Nadu
          </span>
          <span className="commissionerate-for">
            Commissionerate for Welfare of Differently Abled
          </span>
        </div>
        <img className="image-21" src={image21} alt="21"/>
      </div>
      <div className="rectangle-20">
        <div className="flex-container-2">
          <span className="scholarship-for-diff-1">
            Scholarship for Differently Abled Students towards Purchase of Books
            &amp; Note Books, Tamil Nadu
          </span>
          <span className="commissionerate-for-1">
            Commissionerate for Welfare of Differently Abled
          </span>
        </div>
        <img className="image-21" src={image21} alt="21"/>
      </div>
      <div className="rectangle-21">
        <div className="flex-container-3">
          <span className="r-i-m-c-dehradun-sch">
            R. I. M. C. Dehradun Scholarship, Tamil Nadu
          </span>
          <span className="directorate-of-colle">
            Directorate of Collegiate Education, Government of Tamil Nadu
          </span>
        </div>
        <img className="image-11" src={image11} alt="11" />
      </div>
        <div className="rectangle-22">
        <div className="flex-container-4">
          <span className="distribution-subsidy">
            Distribution subsidy for seeds of High yielding varieties(HYV) and
            Hybrid varieties less than 10 yrs
          </span>
          <span className="directorate-of-colle-1">
            Ministry of Agriculture and Farmer's Welfare(MoA)
          </span>
        </div>
          <img className="image-23" src={image23} alt="23"/>
        </div>
      <div className="rectangle-23">
        <div className="flex-container-5">
          <span className="abolition-of-bonded">
            Abolition of Bonded Labour System
          </span>
          <span className="ministry-of-labour-a">
            Ministry of Labour and Employement
          </span>
        </div>
        <img className="image-27" src={image27} alt="27" />
      </div>
      <div className="rectangle-24">
        <div className="flex-container-6">
          <span className="adi-dravidar-and-tri">
            Adi Dravidar and Tribal Welfare Department Hostels - Special Guides
          </span>
          <span className="adi-dravidar-welfare">
            Adi Dravidar Welfare Directorate
          </span>
        </div>
        <img className="image-36" src={image36} alt="36" />
      </div>
      <div className="rectangle-25">
        <div className="flex-container-7">
          <span className="scheme-for-integrate">
            Scheme for integrated textile parks Under the Scheme for setting up
            of Integrated Textile Parks
          </span>
          <span className="handlooms-and-textil">
            Handlooms and Textiles Department{" "}
          </span>
        </div>
        <img className="image-37" src={image37} alt="37"/>
      </div>
      <div className="rectangle-26">
        <div className="flex-container-8">
          <span className="schemes-of-revenue-d">
            Schemes of Revenue dept Issue of certificate{" "}
          </span>
          <span className="revenue-department">Revenue Department</span>
        </div>
        <img className="image-26" src={image26} alt="26"/>
      </div>
    </div>
  );
};
export default Stateschemes;
