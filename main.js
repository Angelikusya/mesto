(()=>{"use strict";var t=document.querySelector(".profile__edit-button"),e=(document.querySelector(".popup-edit"),document.querySelector(".popup-edit__form")),n=document.querySelector(".popup__input_type_name"),r=document.querySelector(".popup__input_type_job"),o=document.querySelector(".profile__add-button"),i=document.querySelector(".popup-add__form"),a=document.querySelector(".profile__edit-avatar"),u=(document.querySelector(".popup-edit-avatar"),document.querySelector(".popup-edit-avatar__form")),c=(document.querySelector(".popup__input_type_link"),document.querySelector(".popup-sure"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"});function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function t(e,n,r,o,i,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._templateSelector=n,this._id=e._id,this._name=e.name,this._link=e.link,this._handleCardClick=o,this._likes=e.likes,this._ownerId=e.owner._id,this._userId=r,this._handleDeleteCard=i.bind(this),this._handleLikeClick=a,this._isLiked=!1}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._imageCard=this._element.querySelector(".element__image"),this._nameCard=this._element.querySelector(".element__subheading"),this._likeCard=this._element.querySelector(".element__vector"),this._trashCard=this._element.querySelector(".element__trash"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._nameCard.textContent=this._name,this._imageCard.src=this._link,this._imageCard.alt=this._name,this.setLikeCounter(this._likes.length),this._checkOwner(),this._checkLikeStatus(),this._setEventListeners(),this._element}},{key:"activateLike",value:function(){this._likeCard.classList.add("element__vector_active")}},{key:"_checkLikeStatus",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._userId&&(t._isLiked=!0,t.activateLike())}))}},{key:"_toggleLikeState",value:function(){this._handleLikeClick(this._isLiked,this._id,this._likeCard),this._likeCard.classList.toggle("element__vector_active"),this._isLiked=!this._isLiked}},{key:"_checkOwner",value:function(){this._userId!==this._ownerId&&this._trashCard.remove()}},{key:"removeElement",value:function(){this._element.remove(),this._element=null}},{key:"handleImageClick",value:function(){this._handleCardClick(this._name,this._link)}},{key:"_setEventListeners",value:function(){var t=this;this._likeCard=this._element.querySelector(".element__vector"),this._likeCard.addEventListener("click",(function(){t._toggleLikeState()})),this._trashCard.addEventListener("click",(function(){t._handleDeleteCard(t._id,t)})),this._imageCard.addEventListener("click",(function(){t.handleImageClick()}))}},{key:"setLikeCounter",value:function(t){this._likeCounter.textContent=t}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._validation=e,this._form=n,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideError(t):this._showError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableButton",value:function(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}},{key:"enableButton",value:function(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this.enableButton()}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideError(e)})),this._disableButton()}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var m=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&v(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var S=function(){function t(e){var n=e.nameSelector,r=e.jobSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameSelector=document.querySelector(n),this._jobSelector=document.querySelector(r),this._avatarSelector=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._nameSelector.textContent,job:this._jobSelector.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar;this._nameSelector.textContent=e,this._jobSelector.textContent=n,this._avatarSelector.src=r,this._avatarSelector.alt=e}},{key:"changeAvatar",value:function(t){this._avatarSelector.src=t}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}var w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._closeButton=this._popup.querySelector(".popup__button-close"),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClickClose=this._handleOverlayClickClose.bind(this),this.close=this.close.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlayClickClose",value:function(t){t.target===this._popup&&this.close()}},{key:"setEventListeners",value:function(){this._closeButton.addEventListener("click",this.close),this._popup.addEventListener("click",this._handleOverlayClickClose)}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(r);if(o){var n=L(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._submitButton=n._form.querySelector(".popup__button"),n._initialSubmitButtonText=n._submitButton.textContent,n}return e=a,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())})),E(L(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){E(L(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(t){this._submitButton.textContent=t?"Сохранение...":this._initialSubmitButtonText}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(w);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=R(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},B.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=R(r);if(o){var n=R(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._image=e._popup.querySelector(".popup-zoom__image"),e._imageSubheading=e._popup.querySelector(".popup-zoom__subheading"),e}return e=a,(n=[{key:"open",value:function(t,e){this._imageSubheading.textContent=t,this._image.src=e,this._image.alt=t,B(R(a.prototype),"open",this).call(this)}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(w);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var D=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=e.baseUrl,this.token=e.token}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:{authorization:this.token}}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:{authorization:this.token}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(t,e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:t,about:e})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(t){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(this._checkResponse)}},{key:"addCard",value:function(t,e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:{authorization:this.token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:e})}).then(this._checkResponse)}},{key:"removeCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this.token}}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this.token}}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this.token}}).then(this._checkResponse)}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}function F(){return F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=J(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},F.apply(this,arguments)}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(r);if(o){var n=J(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===V(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleFormSubmit=e,n._form=n._popup.querySelector(".popup__form"),n}return e=a,(n=[{key:"open",value:function(t,e){F(J(a.prototype),"open",this).call(this),this._cardId=t,this._card=e}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(e,t._cardId,t._card)})),F(J(a.prototype),"setEventListeners",this).call(this)}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(w);function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var G=new h(c,e);G.enableValidation();var $=new h(c,i);$.enableValidation();var K=new h(c,u);K.enableValidation();var Q,W=new D({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-72",token:"f0a7d939-ec7a-4869-a9eb-1d96ec39a9dd"}),X=new S({nameSelector:".profile__name",jobSelector:".profile__job",avatarSelector:".profile__avatar"});Promise.all([W.getUserInfo(),W.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,n)||function(t,e){if(t){if("string"==typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Q=o._id,X.setUserInfo(o),ot.renderItems(i)})).catch((function(t){console.log(t)}));var Y=new P("#popup-edit",(function(t){Y.renderLoading(!0),W.setUserInfo(t.name,t.job).then((function(t){X.setUserInfo({name:t.name,about:t.about,avatar:t.avatar}),Y.close()})).catch((function(t){console.log(t)})).finally((function(){Y.renderLoading(!1)}))}));Y.setEventListeners(),t.addEventListener("click",(function(){Y.open();var t=X.getUserInfo();n.value=t.name,r.value=t.job,G.resetValidation(),G.enableButton()}));var Z=new P("#popup-add",(function(t){var e={name:t.place,link:t.image};Z.renderLoading(!0),W.addCard(e.name,e.link).then((function(t){var e=it(t);ot.addItem(e),Z.close()})).catch((function(t){console.log(t)})).finally((function(){Z.renderLoading(!1)}))}));o.addEventListener("click",(function(){Z.open(),$.resetValidation()})),Z.setEventListeners();var tt=new P("#popup-edit-avatar",(function(t){tt.renderLoading(!0),W.setUserAvatar(t.link).then((function(t){X.changeAvatar(t.avatar),tt.close()})).catch((function(t){console.log(t)})).finally((function(){tt.renderLoading(!1)}))}));a.addEventListener("click",(function(){tt.open(),K.resetValidation()})),tt.setEventListeners();var et=new U("#popup-zoom");function nt(t,e){et.open(t,e)}et.setEventListeners();var rt=new H(".popup-sure",(function(t,e,n){t.preventDefault(),W.removeCard(e).then((function(){n.removeElement(e),rt.close()})).catch((function(t){console.log(t)}))})),ot=new m({renderer:function(t){var e=it(t);ot.addItem(e)}},".elements");function it(t){var e=new f(t,".element-template",Q,nt,(function(){rt.open(e._id,e)}),(function(t,n){(t?W.deleteLike(n):W.addLike(n)).then((function(t){e.setLikeCounter(t.likes.length)})).catch((function(t){console.log(t)}))}));return console.log(Q),e.createCard()}rt.setEventListeners()})();