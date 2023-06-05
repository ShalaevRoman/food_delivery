<template>
  <ul
    class="delivery-switch__list"
  >
    <li
      v-for="(item, index) in deliveryItems"
      :key="index"
      class="list__item"
      :class="{ active: item.isActive }"
      @click="toggleActive(item)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'DeliverySwitch',
  data () {
    return {
      deliveryItems: [
        {
          label: 'Доставка',
          isActive: true
        },
        {
          label: 'Самовивіз',
          isActive: false
        }
      ]
    }
  },
  methods: {
    toggleActive (clickedItem) {
      this.deliveryItems.forEach(item => {
        item.isActive = false
      })
      clickedItem.isActive = true
    }
  }
}
</script>

<style scoped lang="scss">
.delivery-switch__list {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  border: 1px solid #E2E8F0;
  margin-right: 30px;
  padding: 3px;
  border-radius: 48px;
  list-style: none;

  .list__item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    border-radius: 34px;
    cursor: pointer;
    width: 94px;
    height: 30px;
    font-family: 'travels', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #636C81;
  }

  .active {
    background: #5A30F0;
    color: white;
  }
}

//TABLET
@media (min-width: 768px) and (max-width: 1024px) {
  .delivery-switch__list {
    margin-top: 20px;
  }
}
//MOBILE
@media (max-width: 767px) {
  .delivery-switch__list {
    margin-top: 0;
    margin-right: 0;
  }
}
</style>
