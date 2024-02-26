import { useEffect } from 'react';
import City from '../components/City';
import FilterCity from '../components/FilterCity'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cities = () => {
    const navigate = useNavigate();
    const { weather: { cities: cData }, apikey: { key } } = useSelector(s => s);

    useEffect(() => {
        if (!key) {
            navigate('/');
        }
    }, [])

    return (
        <div className='cities-wrapper'>
            <div className='container mx-auto'>
                <FilterCity />
                <div className='flex flex-wrap'>
                    {
                        cData.map(i => (
                            <City city={i} key={i.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cities;