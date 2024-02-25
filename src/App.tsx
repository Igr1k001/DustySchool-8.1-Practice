import React from 'react';
import './App.css';

import { Button } from './components/Button/Button';

import { User } from './components/User/User';

import { Article } from './components/Article/Article';

const users = [
    {
        avatar: 'https://storage.yandexcloud.net/themitri4-backet/capybaras/capybara-3.jpeg',
        login: 'Valek932'
    },
    {
        avatar: 'https://storage.yandexcloud.net/themitri4-backet/capybaras/capybara-5.jpeg',
        login: 'Max819'
    },
    {
        avatar: 'https://storage.yandexcloud.net/themitri4-backet/capybaras/capybara-80.jpeg',
        login: 'Lena912'
    },
    {
        avatar: '',
        login: 'Evdakim91'
    }
]

const articles = [
    {
        sticker: '🏸'
    },
    {
        title: 'Знакомство с React',
    },
    {
        title: 'Кварк кнопочности',
        paragraphs: 'Сделайте одну любую кнопку из макета'
    },
    {
        title: 'Круглый юзерак',
        paragraphs: 'Сделайте компонент с аватаркой пользователя и его логином (ссылка на аватарку и логин должны передаваться через пропсы). Отобразите компонент в интерфейсе'
    },
    {
        title: 'Дружочки-кружочки',
        paragraphs: 'Сделайте массив объектов данных пользователей и отобразите на его основе несколько бейджиков пользователей из прошлой задачи'
    },
    {
        title: 'Башка, дай свгшка',
        paragraphs: 'Добавьте обработку ситуации, когда у пользователя нет аватарки в данных. Выводите в этом случае какую-то аватарку по умолчанию'
    },
    {
        title: 'Реактрёшка',
        paragraphs: 'Сделайте на реакте страничку этой домашки. Только текст домашек и заголовки + заголовок всей страницы и эмоджи-иконка'
    }
]

function App() {
    return (
        <div className="App">
            <Button theme='light'>
                Hello
            </Button>
            <Button theme='dark'>
                Privet Mir
            </Button>

            {users.map(user => <User avatar={user.avatar} login={user.login}/>)}

            {articles.map(article => <Article sticker={article.sticker} title={article.title} paragraphs={article.paragraphs}/>)}
        </div>
    );
}

export default App;
