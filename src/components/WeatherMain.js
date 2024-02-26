import { tempFormat } from "..";


const WeatherMain = ({ city, imgSource, data }) => {
    const [d] = data;
    return (
        <div className="current-weather">
            <div className="left">
                <div className="city-name">
                    <h3>{city.name} <span>({city.region})</span></h3>
                </div>
                <div className="current-weather-detail">
                    <ul className="list-none">
                        <li className="capitalize">
                            <span>Hava Durumu: {d.weather[0].description}</span>
                        </li>
                        <li>
                            <span>Nem: %{d.main.humidity}</span>
                        </li>
                        <li>
                            <span>Rüzgar: {d.wind.speed} mph</span>
                        </li>
                    </ul>
                    <div className="mt-5">
                    </div>
                </div>
            </div>
            <div className="current-weather-icon">
                <div className="current-temp">
                    <span className="text-5xl">{tempFormat(d.main.temp)}°</span>
                </div>
                <img src={`${imgSource + d.weather[0].icon}.svg`} alt="weather icon" className="w-24" />
            </div>
        </div>
    )
}

export default WeatherMain;