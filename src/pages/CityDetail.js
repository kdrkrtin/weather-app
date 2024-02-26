import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import WeatherItem from "../components/WeatherItem";
import WeatherMain from "../components/WeatherMain";
import { get } from "../Services";

const imgSource = `${process.env.PUBLIC_URL}/src/`;

const CityDetail = () => {
    const [cityWeather, setCityWeather] = useState(null);
    
    const { weather: { cities }, apikey: { key } } = useSelector(s => s);
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [city] = cities.filter(c => c.id === +id);

    useEffect(() => {
        if (!key) navigate('/');
        else {
            get(`/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&appid=${key}&lang=tr`)
                .then(data => setCityWeather(data));
        }
    }, []);

    return (
        <div className="container mx-auto">
            {
                cityWeather && (
                    <>
                        <WeatherMain city={city} imgSource={imgSource} data={cityWeather.list.splice(0,1)} />
                        <div className="weather-wrapper">
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