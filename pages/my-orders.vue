<template lang="pug">
  #my-orders
    nav.my-orders-nav
      nuxt-link(v-for="(item, index) in orderStates" v-bind:key="index" v-bind:to="item.path").order-link {{ item.text }}
    nuxt-child
</template>

<script>
  export default {
    name: 'my-orders',
    layout: 'main',
    data() {
      return {
        orderStates: [
          {
            path: '/my-orders',
            // name: 'my-orders',
            text: '所有订单'
          },
          {
            path: '/my-orders/grouping',
            // name: 'grouping',
            text: '待成团'
          },
          {
            path: '/my-orders/using',
            // name: 'using',
            text: '待使用'
          },
          {
            path: '/my-orders/dealt',
            // name: 'dealt',
            text: '交易成功'
          }
        ]
      }
    },
    computed: {
      activeRoute() {
        return this.$route.name;
      }
    }
  }
</script>

<style scoped src="assets/sass/my-orders.sass" lang="sass"></style>
