import React, { useState } from 'react';
import axios from 'axios';
import "./user.css";
import { saveTokenToLocalStorage, saveUserIdToLocalStorage } from '../../utils/localStorage';
import { getUserIdFromToken } from '../../utils/localStorage';
import LoginButton from '../../components/buttons/login';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:3000/users/login',
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            console.log('Response data:', response.data);

            const { token } = response.data;
            saveTokenToLocalStorage(token);
            setTimeout(() => {
                const userId = getUserIdFromToken(token);
                saveUserIdToLocalStorage(userId);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }, 100);
            window.location.href = "/home"
        } catch (error) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="container-auth">
            <div className="text-white">
                <center><h5>Login | Ped<b>Reader</b></h5></center>
                <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="ex: email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Senha:</label>
                        <input type="password" name="password" className="form-control" placeholder="ex: your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <a href="/register" className='go-register'>Dont have a account? <b>Register now</b></a>
                    </div>
                    <LoginButton />
                </form>
            </div>
        </div>
    );
}

export default Login;
