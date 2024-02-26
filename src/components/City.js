import { Link } from "react-router-dom";

const City = ({ city }) => {
    return (
        <div className="w-1/3 px-5 mb-5">
            <Link to={`/city/${city.id}`}>
                <div className="city-list-item">
                    {city.name}
                </div>
            </Link>
        </div>
    )
}

export default City;