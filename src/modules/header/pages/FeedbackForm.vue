<template>
  <div
    class="registration feedback-form"
    :style="renderImage"
  >
    <form class="feedback-form__form" @submit.prevent="onSubmit">
      <h4 class="registration__title">Форма обратной связи</h4>

      <transition name="fade">
        <div class="feedback-form__text-error" v-show="popupErrorValueFormNull">
          Заполни оба поля.
        </div>
      </transition>

      <b-form-input
        type="text"
        v-model="user.name"
        placeholder="*Имя"
        class="registration__input registration__input--email"
      ></b-form-input>

      <b-form-input
        type="email"
        v-model="user.email"
        placeholder="*Email"
        class="registration__input registration__input--password"
      ></b-form-input>

      <!-- textarea -->
      <b-form-textarea
        size="sm"
        placeholder="Ваши предложения!"
        v-model="user.textArea"
        class="feedback-form__text-area"
      ></b-form-textarea>
      <!-- #textarea -->

      <button class="button-light-green registration__button-submit">
        Отправить!
      </button>

      <transition name="fade">
        <div v-if="messageSuccess" class="feedback-form__popup-success">
          {{ messageSuccess }}
        </div>
      </transition>

      <transition name="fade">
        <div v-if="messageError" class="feedback-form__popup-error">
          {{ messageError }}
        </div>
      </transition>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        email: "",
        name: "",
        textArea: "",
      },
      popupErrorValueFormNull: false,
      messageSuccess: "",
      messageError: "",
      renderImage:null
    };
  },
  methods: {
    renderCreatedImg() {
    return  this.renderImage= `background: no-repeat center/cover url(${require('@/assets/img/bg_vue_react.jpg')})`
    },
    onSubmit() {
      // Cделать легкую валидацию формы и оповещений

      //   Если оба поля пустые, выводим опомещение
      if (this.user.email === "" && this.user.name === "") {
        this.popupErrorValueFormNull = true;
      }
      //   если одно из полей не заполнено выводим оповещение,
      // Если оба поля заполнены, отправляем запрос с данными

      if (this.user.email !== "" && this.user.name !== "") {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", {
            name: this.user.name,
            email: this.user.email,
            textArea: this.user.textArea,
          })
          // если успешная отправка, очищаем поля
          .then((res) => {
            this.popupErrorValueFormNull = false;
            (this.messageSuccess = "Форма успешно отправлена."),
              // reset inputs
              (this.user.name = ""),
              (this.user.textArea = ""),
              (this.user.email = "");
          })
          // если не успешная отправка данных, выводим ошибку
          .catch((e) => {
            this.popupErrorValueFormNull = false;
            this.messageError = "Техническая ошибка при отправке.";
            console.log(e);
          });
      }
      this.popupErrorValueFormNull = true;
      //   if (this.user.email === "" || this.user.password === "") {
      //     console.log(3);
      //   }
      console.log(this.user);

      // отправка данных на указанный url  /email/email.php
      //   + добавить файл php на сервер для обработки формы
    },

  },
      created() {
      this.renderCreatedImg()
    }
};
</script>

<style lang="scss">
.registration {
  height: calc(100vh - 76px);

  display: flex;
  justify-content: center;

  align-items: center;
  background-size: cover;
}
.registration__form {
  padding: 80px;
  background: rgba(106, 224, 171, 1);
  background: linear-gradient(
    to bottom right,
    rgba(106, 224, 171, 1),
    rgba(11, 34, 78, 1)
  );
  margin: 0 auto;
  /* max-width: 550px; */
  width: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 1em;
}
.registration__title {
  text-align: center;
  color: #ffffff;
}
.registration__input {
  height: 45px;
}
.registration__input--email {
  margin-bottom: 25px;
  margin-top: 20px;
}
.registration__input--password {
  margin-bottom: 25px;
}

.registration__button-submit {
  margin: 0 auto;
  width: 200px;
}

.feedback-form {
  &__text-area {
    height: 200px !important;
    margin-bottom: 25px;
  }
  //
  &__popup-success {
    background: #03c878;
    padding: 1em 2em;
    color: #ffffff;
    border-radius: 5px;
    text-align: center;
    margin-top: 25px;
  }

  &__popup-error {
    background: #dc3545;
    padding: 1em 2em;
    color: #ffffff;
    border-radius: 5px;
    text-align: center;
    margin-top: 25px;
  }
  &__text-error {
    background: #dc3545;
    padding: 1em 2em;
    color: #ffffff;
    border-radius: 5px;
    text-align: center;
  }
  // 
  &__form {
    padding: 35px;
    background: rgba(106, 224, 171, 1);
    background: linear-gradient( to bottom right, rgba(106, 224, 171, 1), rgba(11, 34, 78, 1) );
    margin: 0 auto;
    /* max-width: 550px; */
    width: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 1em;
  }
}
@media screen and (max-width: 576px) {
  .registration__form {
    max-width: 550px;
    margin: 15px;
    padding: 45px;
  }
}
//
//
// Стили для анимации vue
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>