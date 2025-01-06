import React, { useState } from 'react';
import loginPageImg from '../../assets/Images/loginImage.jpg';
import aatralLogo from '../../assets/Images/logoMark.png';
import './AdminLogin.scss';
import "../BecomeAMember/becomeAnMember.scss";
import google from '../../assets/Icons/Login/Google_Button.png';
import apple from '../../assets/Icons/Login/Apple_Button.png';
import fbIcon from '../../assets/Icons/Login/Fb_Button.png';
import emailIcon from '../../assets/Icons/Login/Mail.png';
import unlock from '../../assets/Icons/Login/unlock.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { notification, Tooltip } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Button, Spin } from 'antd';
import '../../components/Loader/loader.scss'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [showError, setShowError] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log('loading', loading)

    const navigate = useNavigate();

    const validate = (name, value) => {
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return !value ? 'Email is required.' : !emailRegex.test(value) ? 'Enter a valid email.' : '';
        } else if (name === 'password') {
            return !value ? 'Password is required.' : value.length < 6 ? 'Password must be at least 6 characters.' : '';
        }
        return '';
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        name === 'email' ? setEmail(value) : setPassword(value);

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validate(name, value),
        }));
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };

    const handleContinue = async () => {
        const emailError = validate('email', email);
        const passwordError = validate('password', password);

        setErrors({ email: emailError, password: passwordError });

        if (!emailError && !passwordError) {
            console.log("No validation errors");
            setLoading(true);

            try {
                const response = await axios.post('https://backend.aatralindia.org/api/auth/local', {
                    identifier: email,
                    password,
                });
                const { jwt, user } = response.data;
                openNotification('success', 'You have successfully signed in.')
                localStorage.setItem("authToken", jwt);
                localStorage.setItem("user", JSON.stringify(user));
                navigate('/admin-table')
            } catch (err) {
                openNotification('error', 'Your sign-in attempt has failed.')

            } finally {
                setLoading(false);
              }
        } else {
            setShowError(true);
        }
    };

    const openNotification = (type, message) => {

        const borderColor = type === 'success' ? '#52c41a' : '#f5222d';

        notification[type]({
            message: type === 'success' ? 'Sign In Success' : 'Sign In Failed',
            description: message,
            duration: 3,
            placement: 'top',
            style: {
                marginLeft: 'auto',
                marginRight: 'auto',
                borderLeft: `6px solid ${borderColor}`,
                borderRadius: '10px',
                width: '300px',
                padding: '10px',
                fontSize: '14px',
                lineHeight: '1.5',
            },
        });
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img className="logo" alt='' src={aatralLogo} />
                    <div style={{ display: 'flex', marginTop: '20px', marginBottom: '10px' }}>
                        <h1 style={{ color: '#fcb01a', fontSize: '20px', marginRight: '5px' }}>Welcome!</h1>
                        <p className="login-subtext">Sign In with Email </p>
                    </div>
                    <div className="input-container">
                        <img src={emailIcon} alt="Email Icon" className="input-icon" />
                        <input
                            className={`formText ${errors.email && showError && 'errorFocus'}`}
                            name="email"
                            placeholder="Enter Mail Id"
                            type="text"
                            value={email}
                            onChange={handleChange}
                            autoComplete="new-email"
                        />
                    </div>
                    {errors.email && showError && (
                        <div style={{ color: 'red', fontSize: '12px', marginTop: '6px' }}>{errors.email}</div>
                    )}

                    <div className="input-container">
                        <img src={unlock} alt="Password Icon" className="input-icon" />
                        <input
                            className={`formText ${errors.email && showError && 'errorFocus'}`}
                            name="password"
                            placeholder="Enter Password"
                            type={isPasswordVisible ? 'text' : 'password'}
                            value={password}
                            onChange={handleChange}
                            autoComplete="new-password"
                        />
                        <Button
                            type="link"
                            icon={isPasswordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                            onClick={togglePasswordVisibility}
                            className="eye-button"
                        />
                    </div>
                    {errors.password && showError && (
                        <div style={{ color: 'red', fontSize: '12px', marginTop: '6px' }}>{errors.password}</div>
                    )}

                    <div style={{ width: '100%' }}>
                        <div style={{ display: 'flex' }}>
                            <button className='gradient-button' onClick={handleContinue} disabled={loading}>Sign In</button>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <div className="or-container">
                                <div className="line"></div>
                                <span className="or-text">Or Sign In With</span>
                                <div className="line"></div>
                            </div>

                            <div style={{ display: 'flex', width: '50%', justifyContent: 'center' }}>
                                <Tooltip placement="BottomLeft" title="Coming Soon">
                                    <img className='appLogos' alt='' src={google} />
                                </Tooltip>
                                <Tooltip placement="BottomLeft" title="Coming Soon">
                                    <img className='appLogos' alt='' src={apple} />
                                </Tooltip>
                                <Tooltip placement="BottomLeft" title="Coming Soon">
                                    <img className='appLogos' alt='' src={fbIcon} />
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="login-right">
                <img alt='' src={loginPageImg} className="login-image" />
            </div>
        </div>
    );
}
