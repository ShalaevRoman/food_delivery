<template>
  <header
    class="header"
  >
    <div class="header-action__switcher">
      <router-link
        class="header__title"
        to="/"
      >
        FoodDeliver
      </router-link>
      <DeliverySwitch/>
    </div>
    <div class="header-action__nav">
      <NavList/>
      <p
        class="header__number"
      >
        +380 67 451 99 57 | 24/7
      </p>
    </div>
  </header>
</template>

<script>
import DeliverySwitch from '@/components/header/DeliverySwitch.vue'
import NavList from '@/components/header/NavList.vue'

export default {
  name: 'HeaderComponent',
  components: {
    NavList,
    DeliverySwitch
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  box-shadow: 0 2px 14px rgba(0, 0, 0, 0.07);
  transition: background-color 0.3s ease;
  z-index: 998;
  .header-action__switcher {
    display: flex;
    align-items: center;
    .header__title {
      margin: 0 30px 0 70px;
      text-decoration: none;
      font-family: 'Verdana', sans-serif;
      font-weight: 700;
      font-size: 18px;
      color: #404040;
    }
  }
  .header-action__nav {
    width: 100%;
    margin-left: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header__number {
      display: block;
      margin-left: auto;
      font-family: 'travels', sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
      color: #404040;
    }
  }
}
// TABLET
@media (min-width: 768px) and (max-width: 1024px) {
  .header {
    padding: 10px;
    .header-action__switcher {
      flex-wrap: wrap;
      flex-direction: column;
      .header__title {
        margin: 0 30px 0 0;
      }
    }
    .header-action__nav {
      height: 100%;
      flex-direction: column-reverse;
    }
  }
}

//MOBILE
@media (max-width: 767px) {
  .header {
    padding: 5px;
    flex-direction: column;
    .header-action__switcher {
      flex-direction: column;
      .header__title {
        margin: 20px 0;
      }
    }
    .header-action__nav {
      margin-left: 0;
      height: 100%;
      flex-direction: column;
      .header__number {
        margin-top: 20px;
        margin-left: 0;
      }
    }
  }
}
</style>
