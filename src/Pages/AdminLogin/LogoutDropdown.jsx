import React, { useState, useEffect } from 'react';
import { Dropdown, Menu, Avatar, Space, Typography } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const UserProfileDropdown = () => {
    const [user, setUser] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserData = localStorage.getItem('user');
        if (storedUserData) {
            const parsedUser = JSON.parse(storedUserData); 
            setUser(parsedUser); 
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        navigate('/admin-login')
        
    };
    console.log('user', user)

    const menu = (
        <Menu>
            <Menu.Item key="signOut" icon={<LogoutOutlined />} onClick={handleSignOut}>
                Sign Out
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <Space>
                <Avatar style={{ background: '#fcb01a' }} size="large" icon={<UserOutlined />} />
                <div>
                    <Typography.Text><b>{user?.username}</b></Typography.Text>
                    <br />
                    <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
                        <b>{user?.email}</b>
                    </Typography.Text>
                </div>
            </Space>
        </Dropdown>
    );
};

export default UserProfileDropdown;
