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
        <div className='home'>
            <h3 className="home-title">API Key giriniz!</h3>
            <input type="text" placeholder='API Key' className="w-96 p-3 rounded" onChange={handleKey} />
            {
                err && <span className="key-inp">Geçersiz bir API Key değeri girdiniz.</span>
            }
            <button className="login" onClick={submitKey}>Giriş Yap</button>
        </div>
    )
}

export default Home;