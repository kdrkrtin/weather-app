import { useDispatch, useSelector } from "react-redux";
import { filterCities } from "../store/weather";

const FilterCity = () => {
    // const { cities } = useSelector(s => s.weather);
    const dispatch = useDispatch();

    const searchCity = (e) => {
        dispatch(filterCities(e.target.value));
    }

    return (
        <div className="w-1/3 mx-auto text-center mb-10 px-5">
            <input type="text" className="w-full rounded p-2 " placeholder="Search City" onChange={searchCity} />
        </div>
    )
}

export default FilterCity;