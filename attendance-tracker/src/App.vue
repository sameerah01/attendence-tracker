<template>
  <v-app >
    <Navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar'
export default {  
  name: 'App',
  components: {Navbar},
  methods:{
    back() {
      this.$router.go(-1)
    }
  }
};
</script>
