<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" >
          <v-toolbar-title >Register</v-toolbar-title>
        </v-toolbar>
      <div class="pl-4 pl-4 pt-2 pb-2">
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="Email"/>
          <br>
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Password">
          <br>
          <div class="error" v-html="error" />
          <v-btn color="cyan"
            @click="register">Register
          </v-btn>

      </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email (value) {
      console.log('Email has changed ', value)
    }
  },
  methods: {
    async register () {
      try {
        const authresponse = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(authresponse.data)
      } catch (error) {
        this.error = error.response.data.error
        console.error(error)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red;
  }
</style>
