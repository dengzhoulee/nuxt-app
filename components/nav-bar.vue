<template lang="pug">
  nav#nav
    nuxt-link(v-for='(nav, index) in navList' v-bind:to="nav.path" v-bind:key="index").nav-link
      img(v-if="activeRoute === nav.name" v-bind:src="nav.activeIcon")
      img(v-else :src="nav.icon")
      span {{ nav.text }}
</template>

<script>
  export default {
    data() {
      return {
        navList: [
          {
            path: '/',
            name: 'index',
            text: '商城',
            icon: require('static/images/store.png'),
            activeIcon: require('static/images/store-on.png')
          },
          {
            path: '/order',
            name: 'order',
            text: '订单',
            icon: require('static/images/order.png'),
            activeIcon: require('static/images/order-on.png')
          },
          {
            path: '/cards',
            name: 'cards',
            text: '卡包',
            icon: require('static/images/card.png'),
            activeIcon: require('static/images/card-on.png')
          },
          {
            path: '/mine',
            name: 'mine',
            text: '我的',
            icon: require('static/images/card.png'),
            activeIcon: require('static/images/card-on.png')
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

<style lang="sass" src="assets/sass/nav-bar.sass"></style>
