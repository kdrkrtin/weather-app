import City from '../components/City';
import FilterCity from '../components/FilterCity'
import { useSelector } from 'react-redux';

const Home = () => {

    const { cities: cData } = useSelector(s => s.weather);

    return (
        <div className='bg-blue-400 pt-10'>
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

export default Home;