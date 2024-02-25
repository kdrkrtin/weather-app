import { longDateFormat, timeFormat, tempFormat } from "..";

const WeatherItem = ({ item, index, imgSource }) => {
    return (
        <div className="item w-full md:w-1/2 lg:w-1/3 p-2" key={index}>
            <div className="wrapper border-2 rounded p-3 pt-14 flex items-center flex-col text-center relative">
                <div className="date absolute left-2 top-2 text-xs bg-slate-500 text-white rounded py-1 px-3">
                    {longDateFormat(item.dt_txt)}
                </div>
                <div className="time mb-3 text-sm">
                    {timeFormat(item.dt_txt)}
                </div>
                <div className="icon mb-3">
                    <img src={`${imgSource + item.weather[0].icon}.svg`} alt="weather icon" className="w-10" />
                </div>
                <div className="temp">
                    <span>{tempFormat(item.main.temp)}°</span>
                </div>
                <div className="desc">
                    <ul className="list-none mt-4">
                        <li className="text-xs text-gray-400 capitalize">
                            <span>Hava Durumu: {item.weather[0].description}</span>
                        </li>
                        <li className="text-xs text-gray-400">
                            <span>Nem: %{item.main.humidity}</span>
                        </li>
                        <li className="text-xs text-gray-400">
                            <span>Rüzgar: {item.wind.speed} mph</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WeatherItem