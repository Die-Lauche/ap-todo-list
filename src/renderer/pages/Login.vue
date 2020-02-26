<template>

    <div id="login">
        <h1>ToDo-List Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Benutzername" />
        <input type="password" name="password" v-model="input.password" placeholder="Passwort" />
        <button type="button" class="btn" v-on:click="login()"><span>Login</span></button>
    </div>

</template>

<script>

export default {
    data() {
        return {
            input: {
                username: "",
                password: "",
            }
        }
    },
    methods: {
        login() {
            // TODO: Add authentication via DB useraccount
            // User login authentication and session creation
            if(this.input.username != "" && this.input.password != "") {
                if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    this.$emit("authenticated", true);

                    // Save username in session.
                    sessionStorage.setItem('user', this.input.username);

                    // Redirect to the overview page
                    this.$router.replace({ name: "overview" });
                } else {
                    console.log("Wrong username or password entered!");
                }
            } else {
                console.log("No username or password entered!");
            }
        },
    }
}
</script>

<style>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }

    h1 {
        margin-bottom: 15px;
    }

    input {
        width: 100%;
        padding: 5px;
        margin-bottom: 10px;
    }

    .btn {
        position: relative;

        display: block;
        padding: 0;

        overflow: hidden;

        border-width: 0;
        outline: none;
        border-radius: 2px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
        
        background-color: #57595D;
        color: #ecf0f1;
        
        transition: background-color .3s;
    }

    .btn:hover, .btn:focus {
        background-color: #393b3f;
        cursor: pointer;
    }

    .btn > * {
        position: relative;
    }

    .btn span {
        display: block;
        padding: 12px 24px;
    }

    .btn:before {
        content: "";
        
        display: block;
        width: 0;
        padding-top: 0;
            
        border-radius: 100%;
        
        background-color: rgba(236, 240, 241, .3);
        
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .btn:active:before {
        
        transition: width .2s ease-out, padding-top .2s ease-out;
    }
</style>