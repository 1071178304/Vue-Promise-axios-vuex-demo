<template>
  <div>
 
      有n吗{{$store.state.n}}
      <button @click="fzdemo()">查看localStorafe使用</button>
  </div>
</template>

<script>
export default {
  data() {
    return{
    }
  },
  methods: {
    fzdemo() {
      const count = localStorage.getItem('count')
      console.log(count,"local")
      
    }
  }
}
</script>

<style>

</style>