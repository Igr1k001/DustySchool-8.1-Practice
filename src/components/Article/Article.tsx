import React from 'react';

import './Article.css';

export interface IArticleProps {
    title?: string;
    paragraphs?: string;
    sticker?: string;
}

export const Article: React.FC<IArticleProps> = ({ title, paragraphs, sticker }) => {

    return (
        <div className="Article">
            {sticker && <p className='Sticker'>{sticker}</p>}
            {title && <h1 className='Title'>{title}</h1>}
            {paragraphs && <p className="Paragraphs">{paragraphs}</p>}
        </div>
    );
}