import "./Natschemes.css";
import {Link} from 'react-router-dom';
import image21 from "./assets/image21.png";
import image9Arrow from "./assets/image9Arrow.png";
import image23 from "./assets/image23.png";
import image27 from "./assets/image27.png";
import image33 from "./assets/image33.png";
import image13 from "./assets/image13.png";
import image11 from "./assets/image11.png";
import image12 from "./assets/image12.png";
import image26 from "./assets/image26.png";
const Natschemes = () => {
  <Link to='/Mainpage'>
  return (
    <div className="nat-schemes">
      <div className="flex-container">
        <img className="image-9-arrow" src={image9Arrow} alt="9" />
        <img className="image-33" src={image33} alt="33" />
      </div>
      <div className="rectangle-19">
        <a className="pragati-scholarship" href="/">
          Pragati Scholarship Scheme for Girl Students (Technical Degree) All
          India Council for Technical Education
        </a>
        <img className="image-11" src={image11} alt="11" />
      </div>
      <div className="rectangle-19">
        <a className="merit-cum-means-scho" href="/">
          Merit Cum Means Scholarship for Professional and Technical Courses CS
          Mininstry of Minority Affairs
        </a>
        <img className="image-12" src={image12} alt="12"/>
      </div>
      <div className="rectangle-19">
        <a className="scholarships-for-top" href="/">
          Scholarships for Top Class Education for students with disabilities
          Department of Empowerment of Persons with disabilities
        </a>
        <img className="image-21" src={image21} alt="21"/>
      </div>
        <div className="rectangle-19">
          <a className="prime-ministers-scho" href="/">
            Prime Minister's Scholarship Scheme for RPF&#x2F;RPSF Ministry of
            Railways
          </a>
          <img className="image-13" src={image13} alt="13"/>
        </div>
      <div className="rectangle-19">
        <a className="central-sector-schem" href="/">
          Central Sector Scheme of Scholarships for College and University
          Students Department of Higher Studies
        </a>
        <img className="image-28" src={image11} alt="11" />
      </div>
      <div className="rectangle-19">
        <a className="national-scheme-on-w" href="/">
          National Scheme on Welfare of Fisherman Ministry of Agriculture and
          Farmers Welfare(MoA)
        </a>
        <img className="image-23" src={image23} alt="23" />
      </div>
      <div className="rectangle-19">
        <a className="national-career-serv" href="/">
          National Career Service(NCS) Ministry of Labour and Employement
        </a>
        <img className="image-27" src={image27} alt="27" />
      </div>
      <div className="rectangle-19">
        <a className="pm-jeevan-jyoti-bima" href="/">
          PM Jeevan Jyoti Bima Yojana(PMJJBY,Life light Insurance Scheme)
          Ministry of Finance
        </a>
        <img className="image-26" src={image26} alt="26" />
      </div>
    </div>
  );
  </Link>
};
export default Natschemes;
