import "../styles/card.css";
import cloudy from "../assets/cloudy.png";
import rain from "../assets/rain.png";
import sun from "../assets/sun.png";

const getImage = (prediction) => {
  if (prediction > 85) {
    return rain;
  }
  if (prediction > 60) {
    return cloudy;
  } else return sun;
};

const Card = ({ temp, date, chanceOfRain }) => {
  return (
    <div className="flex-center">
      <p className="Date">{date}</p>
      <img className="Symbol" src={getImage(chanceOfRain)} alt="" />
      <p className="Temperature">{temp + "ºC"}</p>
    </div>
  );
};

export default Card;
