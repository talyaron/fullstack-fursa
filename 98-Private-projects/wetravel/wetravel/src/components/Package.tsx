import {package_details} from "../components/ListPackages";
import "../components/Package.scss";

function Package(prop: package_details) {
  const { city,description ,oldprice,img} = prop;

  return (
      <div className="box">
        <img src={prop.img} alt="" />
        <div className="content">
          <h3>
            {" "}
            <i className="fas fa-map-marker-alt"></i> {prop.city}{" "}
          </h3>
          <p> {prop.description}</p>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <div className="price">
            {" "}
            {prop.oldprice} <span>{prop.newprice}</span>{" "}
          </div>
          <a href="#" className="btn">
            book now
          </a>
        </div>
      </div>
  );
}

export default Package;