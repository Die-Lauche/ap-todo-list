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
  /* export default {
    name: 'ap-todo-list'
  } */
   export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "test",
                    password: "test"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
  /* CSS */
</style>
