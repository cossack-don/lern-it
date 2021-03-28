<template>
  <div
    class="registration"
    :style="`background: no-repeat center/cover url(${require('@/assets/img/11.png')}) `"
  >
    <form class="registration__form" @submit.prevent="onSubmit">
      <h4 class="registration__title">Форма регистрации:</h4>
      <div v-show="popupErrorValueFormNull">заполни поля</div>
      <b-form-input
        type="email"
        v-model="user.email"
        placeholder="Email"
        class="registration__input registration__input--email"
      ></b-form-input>

      <b-form-input
        type="text"
        v-model="user.password"
        placeholder="Password"
        class="registration__input registration__input--password"
      ></b-form-input>

      <button class="button-light-green registration__button-submit">
        Registration!
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      popupErrorValueFormNull: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.user.email === "" && this.user.password === "") {
        this.popupErrorValueFormNull = true;
      }
      //   if (this.user.email === "" || this.user.password === "") {
      //     console.log(3);
      //   }
      console.log(this.user);
    },
  },
};
</script>

<style>
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
@media screen and (max-width:576px) {
  .registration__form {
    max-width: 550px;
    margin: 15px;
    padding: 45px;
  }

}
</style>