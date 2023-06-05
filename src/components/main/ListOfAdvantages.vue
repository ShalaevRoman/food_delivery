<template>
  <section class="advantages-list__wrapper">
    <div
      class="advantages-item"
      v-for="item in advantagesList"
      :key="item.id"
      ref="blocks"
      @mouseenter="toggleHover(item, true)"
      @mouseleave="toggleHover(item, false)"
    >
      <div
        v-show="!item.hovered"
        class="item-content"
      >
        <h2
          class="content-title"
        >
          {{ item.title }}
        </h2>
        <img
          :src="getImgPath(item.imgName)"
          alt="Advantage Image"
          class="content-image"
        >
      </div>
      <div
        v-show="item.hovered"
        class="item-content--hovered"
      >
        {{ item.hoverText }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ListOfAdvantages',
  data () {
    return {
      advantagesList: [
        {
          id: 1,
          title: 'Висока якість продукції',
          hoverText: 'Наша доставка гарантує вам високу якість продуктів.  Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.',
          imgName: 'check',
          hovered: false
        },
        {
          id: 2,
          title: 'Різноманітність страв',
          hoverText: 'Наша доставка гарантує вам високу якість продуктів.  Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.',
          imgName: 'bowl',
          hovered: false
        },
        {
          id: 3,
          title: 'Швидка доставка',
          hoverText: 'Наша доставка гарантує вам високу якість продуктів.  Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.',
          imgName: 'roket',
          hovered: false
        },
        {
          id: 4,
          title: 'Працюємо цілодобово',
          hoverText: 'Наша доставка гарантує вам високу якість продуктів.  Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.',
          imgName: 'clock',
          hovered: false
        }
      ],
      animatedCards: []
    }
  },
  mounted () {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const block = entry.target
          setTimeout(() => {
            block.classList.add('move-up')
          }, index * 300)
        } else {
          const block = entry.target
          block.classList.remove('move-up')
        }
      })
    }, options)

    this.$refs.blocks.forEach((block) => {
      observer.observe(block)
    })
  },
  methods: {
    getImgPath (imgName) {
      return require(`@/assets/img/listOfAdvantages/${imgName}.svg`)
    },
    toggleHover (item, isHovered) {
      item.hovered = isHovered
    }
  }
}
</script>

<style scoped lang="scss">
.advantages-list__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 110px;
  .advantages-item {
    margin: 10px;
    width: 300px;
    height: 330px;
    background: #F3F6FB;
    border-radius: 8px;
    transition: background-color 3s, transform 0.4s;
    overflow: hidden;
    .item-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
      padding: 20px;
      img {
        width: 190px;
        height: 190px;
      }
      .content-title {
        width: 210px;
        font-family: 'travels', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        text-align: center;
        color: #404040;
      }
    }
    .item-content--hovered {
      height: 100%;
      width: 100%;
      padding: 30px;
      border-radius: 8px;
      transition: 1s ease;
      background: #5A30F0;
      font-family: 'travels', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: white;
    }
  }
  .advantages-item.move-up {
    transform: translateY(-35px);
  }
}
//TABLET
@media (min-width: 768px) and (max-width: 1024px) {
  .advantages-list__wrapper {
    flex-wrap: wrap;
  }
}
//MOBILE
@media (max-width: 767px) {
  .advantages-list__wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
