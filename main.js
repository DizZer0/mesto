(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._selector=e,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._selector.inputSelector))}var n,r;return n=t,(r=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){var n=e._formElement.querySelector(".".concat(t.id,"-error"));e._hideInputError(t,n)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitButton.classList.add(this._selector.inactiveButtonClass),this._submitButton.setAttribute("type","button")):(this._submitButton.classList.remove(this._selector.inactiveButtonClass),this._submitButton.setAttribute("type","submit"))}},{key:"_hideInputError",value:function(e,t){e.classList.remove(this._selector.inputErrorClass),t.classList.remove(this._selector.errorClass)}},{key:"_showInputError",value:function(e,t){e.classList.add(this._selector.inputErrorClass),t.classList.add(this._selector.errorClass),t.textContent=e.validationMessage}},{key:"_checkInputValibity",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_setEventListener",value:function(){var e=this;this._submitButton=this._formElement.querySelector(this._selector.submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValibity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListener()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.data,o=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._cardTemplate=n,this._handleCardClick=o}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return this._cardTemplate.cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".photo-grid__image"),this._buttonLike=this._element.querySelector(".photo-grid__like-button"),this._setEventListener(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".photo-grid__title").textContent=this._name,this._element}},{key:"_setEventListener",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick({name:e._name,link:e._link})})),this._buttonLike.addEventListener("click",(function(){e._handleLikeClick()})),this._element.querySelector(".photo-grid__delete-button").addEventListener("click",(function(){e._handleDeleteClick()}))}},{key:"_handleLikeClick",value:function(){this._buttonLike.classList.toggle("photo-grid__like-button_active")}},{key:"_handleDeleteClick",value:function(){this._element.remove()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){return e._renderer(t)}))}},{key:"renderItem",value:function(e){this._renderer(e)}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleClickClose=this._handleClickClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickClose",value:function(e){(e.target.classList.contains("popup__container")||e.target.classList.contains("popup")||e.target.classList.contains("popup__exit-button"))&&this.close()}},{key:"_setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("mouseup",this._handleClickClose)}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("mouseup",this._handleClickClose)}},{key:"open",value:function(){this._setEventListeners(),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._removeEventListeners(),this._popup.classList.remove("popup_opened")}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e))._image=t._popup.querySelector(".view-photo__img"),t._title=t._popup.querySelector(".view-photo__title"),t}return t=s,(n=[{key:"open",value:function(e,t){this._image.src=e,this._image.alt=t,this._title.textContent=t,l(_(s.prototype),"open",this).call(this)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(u);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(s,e);var t,n,r,o,i=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function s(e,t){var n,r=e.submitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(n=i.call(this,t))._submitForm=r,n._inputList=n._popup.querySelectorAll(".form-change__text"),n._inputValues={},n._form=n._popup.querySelector(".form-change"),n._submit=n._submit.bind(E(n)),n}return t=s,(n=[{key:"setInputValue",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"_submit",value:function(){this._submitForm(this._getInputValues())}},{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value,console.log("f")})),this._inputValues}},{key:"_setEventListeners",value:function(){this._form.addEventListener("submit",this._submit),v(w(s.prototype),"_setEventListeners",this).call(this)}},{key:"_removeEventListeners",value:function(){this._form.removeEventListener("submit",this._submit),v(w(s.prototype),"_removeEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),v(w(s.prototype),"close",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(u);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(t.name),this._userStatus=document.querySelector(t.status)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,status:this._userStatus.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userStatus.textContent=e.status}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),O=document.querySelector(".profile__edit-button"),j=document.querySelector(".profile__add-button"),P=document.querySelector("#template").content.querySelector(".photo-grid__item"),I=document.querySelector(".photo-grid");console.log("console.log на 15 строке"),j.addEventListener("click",(function(){x["add-photo"].resetValidation(),R.open()})),O.addEventListener("click",(function(){A.open(),A.setInputValue(V.getUserInfo()),x["edit-profile"].resetValidation()}));var q,x={};q={formSelector:".form-change",inputSelector:".form-change__text",submitButtonSelector:".form-change__save-button",inactiveButtonClass:"form-change__save-button_inactive",inputErrorClass:"form-change__text_type_error",errorClass:"form-change__input-error_active"},Array.from(document.querySelectorAll(q.formSelector)).forEach((function(e){var n=new t(q,e),r=e.getAttribute("name");x[r]=n,n.enableValidation()}));var B=new i({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=new r({data:e,handleCardClick:function(e){T.open(e.link,e.name)}},P);B.addItem(t.generateCard())}},I);B.renderItems();var R=new C({submitForm:function(e){B.renderItem(e),R.close()}},".popup_add-photo"),T=new y(".popup_view-photo"),V=new S({name:".profile__name",status:".profile__status"}),A=new C({submitForm:function(e){V.setUserInfo(e),A.close()}},".popup_edit-profile")})();