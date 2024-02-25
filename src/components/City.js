const City = ({ city }) => {
    return (
        <div className="w-1/3 px-5 mb-5">
            <a href={`/city/${city.id}`}>
                <div className="py-3 border border-gray-900 rounded text-center cursor-pointer bg-gray-900 text-white">
                    {city.name}
                </div>
            </a>
        </div>
    )
}

export default City;