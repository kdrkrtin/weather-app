import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import WeatherItem from "../components/WeatherItem";
import WeatherMain from "../components/WeatherMain";

const API_KEY = '9ee19cc8a28667dc10f9138fb5cb6017';
const imgSource = `${process.env.PUBLIC_URL}/src/`;

const CityDetail = () => {
    const { id } = useParams();
    const { cities } = useSelector(s => s.weather);
    const [city] = cities.filter(c => c.id === +id);
    const [cityWeather, setCityWeather] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&appid=${API_KEY}&lang=tr`)
            .then(res => res.json())
            .then(data => setCityWeather(data));
    }, []);

    return (
        <div className="container mx-auto">
            {
                cityWeather && (
                    <>
                        <WeatherMain city={city} imgSource={imgSource} data={cityWeather.list.splice(0,1)} />
                        <div className="other-weather-detail w-2/3 mx-auto mt-5 flex flex-row flex-wrap pb-10">
                            {
                                cityWeather.list.map((i, index) => (
                                    <WeatherItem key={index} item={i} index={index} imgSource={imgSource} />
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default CityDetail;