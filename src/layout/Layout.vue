<template>
  <div class="app-page-layout">
    <Header v-if="header" :type="headerMode"></Header>
    <div class="app-page-content-fixed" v-if="headerMode === 'fixed'">
      <router-view />
    </div>
    <div class="app-page-content-scrolled" v-if="headerMode === 'scrolled'">
      <router-view />
    </div>
    <Footer v-if="footer"></Footer>
  </div>
</template>

<script>
import Header from './header/Header'
import Footer from './footer/Footer'

export default {
  name: "Layout",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      header: false,
      footer: false,
      headerMode:'scrolled'
    }
  },
  created() {
    if (this.$route.meta.header) {
      this.header = this.$route.meta.header;
    }
    if (this.$route.meta.footer) {
      this.footer = this.$route.meta.footer;
    }
  }
}
</script>

<style scoped>
.app-page-layout{
  min-height: 100%;
  position: relative;
}
.app-page-content-fixed{
  margin-top: 78px;
}
.app-page-content-scrolled{
  margin-top: 0;
}
</style>
