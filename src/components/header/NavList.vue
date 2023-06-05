<template>
  <nav class="nav__wrapper">
    <router-link
      v-for="(item, i) in navList"
      :key="i"
      to="/"
      class="nav__link"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavList',
  data () {
    return {
      navList: [
        {
          title: 'Заклади',
          to: '/institutions'
        },
        {
          title: 'Доставка і оплата',
          to: '/payment'
        },
        {
          title: 'Акції',
          to: '/actions'
        },
        {
          title: 'Про нас',
          to: '/about'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.nav__wrapper {
  display: flex;
  white-space: nowrap;
  margin-right: 10px;
  .nav__link {
    font-family: 'travels', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #404040;
    line-height: 120%;
    text-decoration: none;
  }
  .nav__link:not(:last-child) {
    margin-right: 32px;
  }
}
//TABLET
@media (min-width: 768px) and (max-width: 1024px) {
  .nav__wrapper {
    flex-wrap: nowrap;
    white-space: nowrap;
  }
}
//MOBILE
@media (max-width: 767px) {
  .nav__wrapper {
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    .nav__link:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
}
</style>
