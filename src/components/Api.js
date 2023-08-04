
export default class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.token = options.token;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    };

    //подтягиваем карточки
    getInitialCards() {
        return fetch (`${this.baseUrl}/cards`, {
            headers: {
                authorization: this.token    
            }   
        })
        .then(this._checkResponse)
        .then(data => {
            // Добавляем свойство _id к каждой карточке
            return data.map(card => {
                return {
                    _id: card._id,
                    name: card.name,
                    link: card.link
                }
            });
        });
    } 

    //подтягиваем имя и работу
    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                authorization: this.token
            }
        })
        .then(this._checkResponse)
        .then(data => {
            // Возвращаем объект с информацией о пользователе
            return {
                name: data.name,
                about: data.about,
                avatar: data.avatar        
            }
        }); 
    }

    //отправляем имя и работу на сервак
    setUserInfo(name, about) {
        return fetch (`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: about,
            })
        })
        .then(this._checkResponse)
    }

    // другие методы работы с API
}

