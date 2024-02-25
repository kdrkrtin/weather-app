import { useState } from "react";
import { setAPIKey } from '../store/APIKey'
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { get } from "../Services";

const Home = () => {
    const [key, setKey] = useState(null);
    const [err, setErr] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleKey = e => setKey(e.target.value);

    const submitKey = () => {
        get(`/data/2.5/forecast?lat=39.7767&lon=30.5206&appid=${key}&lang=tr`)
            .then(res => {
                if (res.cod === 401) setErr(true);
                else {
                    setErr(false);
                    dispatch(setAPIKey(key));
                    sessionStorage.setItem('key', key);
                    navigate('/cities');
                }
            });
    }

    return (
        <div className='bg-blue-400 pt-10 h-screen flex flex-col items-center justify-center'>
            <h3 className="mb-6 text-2xl text-white">API Key giriniz!</h3>
            <input type="text" placeholder='API Key' className="w-96 p-3 rounded" onChange={handleKey} />
            {
                err && <span className="text-red-600 text-sm mt-3">Geçersiz bir API Key değeri girdiniz.</span>
            }
            <button className="w-96 mt-6 bg-blue-300 text-white rounded p-3" onClick={submitKey}>Giriş Yap</button>
        </div>
    )
}

export default Home;