import React from 'react';

import './User.css';

export interface IUserProps {
    avatar?: string;
    login: string;
}

const defaultAvatar = 'https://storage.yandexcloud.net/themitri4-backet/default.jpg';

export const User: React.FC<IUserProps> = ({avatar, login}) => {

    return (
        <div className="User">
            <img className="Avatar" src={avatar ? avatar : defaultAvatar}></img>
            <p className="Login">{login}</p>
        </div>
    );
}