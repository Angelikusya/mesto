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
    }

    //отправляем имя и работу на сервер
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

    // отправляем ссылку на новый аватар на сервер
    setUserAvatar(avatar) {
        return fetch (`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })
    .then(this._checkResponse)
    }

    //отправляем новую карточку на сервер
    addCard(name, link) {
        return fetch (`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: {
                authorization: this.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then(this._checkResponse) 
    }
    
    // удаляем карточку с сервера
    removeCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: {
                authorization: this.token
            }
        })
        .then(this._checkResponse);
    }

    // добавляем лайк карточке на сервере
    addLike(imageId) {
        return fetch(`${this.baseUrl}/cards/${imageId}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this.token
            }
        })
        .then(this._checkResponse)
    }

    // удаляем лайк карточки на сервере
    deleteLike(imageId) {
        return fetch(`${this.baseUrl}/cards/${imageId}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this.token
            }
        })
        .then(this._checkResponse);
    }
}