<template>
  <div id="App">
    <!-- <router-view></router-view> -->
    <div id="nav">
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "test",
        password: "test"
      }
    };
  },
  mounted() {
    // Send the user to the login page if hes not authenticated
    if (!this.authenticated) {
        if (sessionStorage.getItem('user') !== null) {
            this.authenticated = true;
        }
        else {
            this.$router.replace({ name: "login" });
        }
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
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
