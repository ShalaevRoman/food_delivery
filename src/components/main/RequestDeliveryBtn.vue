<template>
  <div
    :class="{ 'onScrollChangePosition': isScrolled }"
    class="delivery-btn__wrapper">
    <button
      @click="showAlert"
      :class="{ 'onScrollChangeSize': isScrolled }"
      class="btn">
      Замовити доставку
    </button>
  </div>
</template>

<script>
export default {
  name: 'RequestDeliveryBtn',
  data () {
    return {
      isScrolled: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.isScrolled = window.scrollY > 0
    },
    showAlert () {
      return alert('This is a test instance!')
    }
  }
}
</script>

<style scoped lang="scss">
.delivery-btn__wrapper {
  position: fixed;
  left: 50%;
  bottom: 0;
  padding: 30px;
  transform: translateX(-50%);
  transition: 1s ease;
  cursor: pointer;
  z-index: 999;

  .btn {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: #5A30F0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: spin 25s infinite linear;
    transition: 2s ease;
    font-family: 'travels', sans-serif;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
  }

  .onScrollChangeSize {
    transition: 2s ease;
    height: 170px;
    width: 170px;
    cursor: pointer;
  }
}

.onScrollChangePosition {
  transition: 2s ease;
  bottom: -100px;
}

.onScrollChangePosition:hover {
  transition: 1s ease;
  bottom: 20px;

  .onScrollChangeSize {
    height: 200px;
    width: 200px;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

//TABLET
@media (min-width: 768px) and (max-width: 1024px) {
  .delivery-btn__wrapper {
    padding: 20px;

    .btn {
      width: 170px;
      height: 170px;
      font-size: 16px;
    }

    .onScrollChangeSize {
      height: 150px;
      width: 150px;
    }
  }
  .onScrollChangePosition {
    bottom: -70px;
  }
  .onScrollChangePosition:hover {
    bottom: 15px;

    .onScrollChangeSize {
      height: 170px;
      width: 170px;
    }
  }
}

//MOBILE
@media (max-width: 767px) {
  .delivery-btn__wrapper {
    padding: 10px;

    .btn {
      width: 150px;
      height: 150px;
      font-size: 14px;
    }

    .onScrollChangeSize {
      height: 130px;
      width: 130px;
    }
  }
  .onScrollChangePosition {
    bottom: -40px;
  }

  .onScrollChangePosition:hover {
    bottom: 10px;

    .onScrollChangeSize {
      height: 150px;
      width: 150px;
    }
  }
}
</style>
