<template>
  <div class="hello">
    <span v-if="fatherComponent == 'home'">{{week}}</span>
    <div v-if="fatherComponent == 'home'">
      <router-link to="item">
        <div class="button_style"></div>
      </router-link>
    </div>
    <span v-if="fatherComponent == 'item'">{{week2}}</span>
    <div v-if="fatherComponent == 'item'">
      {{$store.state.count}}
      <button @click="look">+++</button>
      
      <router-link to="../demo2">点击这里查看vuex</router-link>
    </div>
  </div>
</template>

<script>
import store from "../store/store";
import axios from "axios";
export default {
  store,
  name: "HelloWorld",
  data() {
    return {
      n: 10,
      week: "vuex点击下一页，第一页是promise",
      week2: "第2页，vuex"
    };
  },
  created() {
    this.promiseDemo()
  },
  methods: {
    look(n) {
      console.log(this.n);
      store.commit("add", this.n);
      console.log(store.state.count);
      localStorage.setItem('count', store.state.count )
    },
    promiseDemo() {
      let promiseDemoApi = new Promise((resolve,reject) => {
        axios.get("/slides").then(res => {
          console.log(res.status)
          if(res.status == 200 ) {
            resolve(res)
          }else {
            reject("失败")
          }
        });
      })
      let promiseDemoApi2 = new Promise((resolve,reject) => {
        axios.get("/").then(res => {
          if(res.status == 200 ) {
            resolve(res)
          }else {
            reject("失败")
          }
        });
      })
      Promise.all([promiseDemoApi,promiseDemoApi2]).then( res => {
        console.log("成功",res)
      } ).catch(err => {
        console.log(err)
      })
    },
  },
  props: {
    fatherComponent: String
  }
};
</script>

<style lang="scss" scoped>
.button_style {
  background: url(../images/1-4.png) no-repeat center;
  background-size: 100% 100%;
  width: 50px;
  height: 30px;
}
</style>
