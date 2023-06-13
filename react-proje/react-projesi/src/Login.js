import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import './styles.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const kullanici_adi = sessionStorage.getItem('email');
        const sifre = sessionStorage.getItem('password');

        if(email === kullanici_adi && password === sifre) {
            navigate('/portal');
        } else {
            setError('Hatali kullanici adi veya sifre!');
        }
    }

    return (
        <div className='login-page'>
            <div className='login-form'>
                <h2>Giriş</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" 
                        placeholder="Mail adresiniz" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required />

                    <br/><br/>
                
                    <input type="password"
                        placeholder="Şifre"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    <br/><br/>

                    <button type="submit">Login</button>
                </form>

                {error && <p style={{color:'red'}}> {error} </p> }

                <p>
                    Hesabınız yok mu? <Link to="/kayit">Kayıt Ol!</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;

