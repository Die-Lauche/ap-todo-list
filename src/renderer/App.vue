<template>
  <div id="App">
    <!-- <router-view></router-view> -->
    <div id="nav">
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "App",
  computed: {
    ...mapGetters('Users', ['authenticated']),
  },
  mounted() {
    // Send the user to the login page if hes not authenticated
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    logout() {
        sessionStorage.removeItem('user')
        this.authenticated = false;
        this.$router.replace({ name: "login" });
        // @todo Clear the store
    }
  }
};
</script>

<style>
/* CSS */
</style>
