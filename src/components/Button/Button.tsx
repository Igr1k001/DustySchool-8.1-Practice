import React from 'react';

import './Button.css';

export interface IButtonProps extends React.PropsWithChildren {
    theme?: 'dark' | 'light';
}

export const Button: React.FC<IButtonProps> = (props) => {
    const { children, theme = 'light' } = props;

    return (
        <button className={`Button ${theme === 'light' ? 'Button_theme_light' : 'Button_theme_dark'}`}>
            {children}
        </button>
    );
}
