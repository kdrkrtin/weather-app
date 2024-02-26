import { longDateFormat, timeFormat, tempFormat } from "..";

const WeatherItem = ({ item, index, imgSource }) => {
    return (
        <div className="weather-item" key={index}>
            <div className="weather-item-wrapper">
                <div className="weather-item-date">
                    {longDateFormat(item.dt_txt)}
                </div>
                <div className="weather-item-time">
                    {timeFormat(item.dt_txt)}
                </div>
                <div className="mb-3">
                    <img src={`${imgSource + item.weather[0].icon}.svg`} alt="weather icon" className="w-10" />
                </div>
                <div className="temp">
                    <span>{tempFormat(item.main.temp)}°</span>
                </div>
                <div className="desc">
                    <ul className="list-none mt-4">
                        <li className="small capitalize">
                            <span>Hava Durumu: {item.weather[0].description}</span>
                        </li>
                        <li className="small">
                            <span>Nem: %{item.main.humidity}</span>
                        </li>
                        <li className="small">
                            <span>Rüzgar: {item.wind.speed} mph</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WeatherItem