<template>
  <section class="content__wrapper">
    <div class="content">
      <div class="content__img">
        <img
          src="../../assets/img/logan-jeffrey.svg"
          alt="jeffrey"
        >
      </div>
      <div class="content__description">
        <h1 class="content__title">
          Доставка готової їжі в Кієві
        </h1>
        <p class="content__text">
          Ми пропонуємо доставку їжі прямо до ваших дверей. Насолоджуйтесь смачними стравами без необхідності готувати самостійно.
        </p>
      </div>
      <RequestDeliveryBtn />
    </div>
    <div class="content-advantages">
      <ListOfAdvantages />
    </div>
  </section>
</template>

<script>
import RequestDeliveryBtn from '@/components/main/RequestDeliveryBtn.vue'
import ListOfAdvantages from '@/components/main/ListOfAdvantages.vue'

export default {
  name: 'FoodDelivery',
  components: { ListOfAdvantages, RequestDeliveryBtn }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  .content__img {
    flex-basis: 50%;
    img {
      width: 100%;
    }
  }
  .content__description {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content__title {
      width: 400px;
      margin: 0 auto;
      font-family: 'travels', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 76px;
      line-height: 110%;
      color: #404040;
    }
    .content__text {
      width: 400px;
      margin-top: 30px;
      font-family: 'travels', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 140%;
      color: #404040;
    }
  }
}
//TABLET
@media (min-width: 768px) and (max-width: 1024px) {
  .content {
    flex-direction: column;

    .content__img {
      img {
        padding: 10px;
        border-radius: 15px;
        width: 100%;
        height: auto;
      }
    }
    .content__description {
      margin-top: 50px;
      .content__title {
        font-size: 40px;
      }
      .content__text {
        font-size: 16px;
      }
    }
  }
}
//MOBILE
@media (max-width: 767px) {
  .content {
    flex-direction: column;

    .content__img {
      img {
        padding: 5px;
        border-radius: 20px;
        width: 100%;
        height: auto;
      }
    }
    .content__description {
      margin-top: 30px;
      padding: 10px;
      align-items: center;
      justify-content: center;
      .content__title {
        width: 100%;
        text-align: center;
        margin-top: 40px;
        font-size: 36px;
      }
      .content__text {
        width: 100%;
        text-align: center;
        font-size: 14px;

      }
    }
  }
}
</style>
