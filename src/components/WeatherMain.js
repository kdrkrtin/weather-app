import { longDateFormat, tempFormat, timeFormat } from "..";


const WeatherMain = ({ city, imgSource, mainData, data }) => {
    const [d] = data;

    return (
        <div className="current-weather">
            <div className="left">
                <div className="current-time city-name">
                    <h3>{longDateFormat(d.dt_txt)} - {timeFormat(d.dt_txt)}</h3>
                </div>
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
            <div className="current-weather-icon flex-wrap justify-end">
                <div className="current-temp">
                    <span className="text-5xl">{tempFormat(d.main.temp)}°</span>
                </div>
                <img src={`${imgSource + d.weather[0].icon}.svg`} alt="weather icon" className="w-24" />
                <div className="w-full text-right">
                    <h3>Gün Doğumu: {timeFormat(mainData.sunrise * 1000)}</h3>
                    <h3>Gün Batımı: {timeFormat(mainData.sunset * 1000)}</h3>
                </div>
            </div>
        </div>
    )
}

export default WeatherMain;