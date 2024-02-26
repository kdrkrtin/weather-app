import { useDispatch } from "react-redux";
import { filterCities } from "../store/weather";

const FilterCity = () => {
    const dispatch = useDispatch();

    const searchCity = (e) => {
        dispatch(filterCities(e.target.value));
    }

    return (
        <div className="filter-cities">
            <input type="text" className="w-full rounded p-2 " placeholder="Search City" onChange={searchCity} />
        </div>
    )
}

export default FilterCity;