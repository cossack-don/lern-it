<template>
  <div class="wrapper-page-404-error">
    <h2 class="wrapper-page-404-error__title-error">Ошибка 404</h2>
    <!-- картинка -->
    <img
      src="@/assets/img/404.svg"
      alt=""
      class="wrapper-page-404-error__image"
    />
    <!-- описание -->
    <h3 class="wrapper-page-404-error__title">
      К сожалению, этой страницы нет на сайте ...
    </h3>
    <!-- обертка блок внизу с описанием подробным -->
    <div class="wrapper-page-404-error__list-items">
      <h4>Возможно это произошло по следующим причинам:</h4>
      <ul>
        <li
          class="wrapper-page-404-error__item"
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "Действующая страница была удалена",
        "Вы перешли по битой/неработающей ссылке",
        "Произошел системный сбой в работе SPA",
      ],
    };
  },
};
</script>

<style>
.wrapper-page-404-error__image {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 300px;
  height: auto;
}
.wrapper-page-404-error__title-error {
  text-align: center;
  font-size: 40px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.wrapper-page-404-error__title {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
.wrapper-page-404-error__list-items {
  max-width: 768px;
  box-shadow: 0 0 21px 0 #dedede;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 29px 20px 29px 29px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
}
.wrapper-page-404-error__item {
  list-style-type: disc;
}
</style>