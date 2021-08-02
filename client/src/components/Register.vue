<template>
  <div>
    <h1>Register</h1>

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
    <button>Register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email:'',
      password:''
    }
  },
  watch:{
    email (value){
      console.log('Email has changed ',value)
    }
  },
  mounted (){
    setTimeout (()=>{
      this.email = 'Hello World'
    },2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
