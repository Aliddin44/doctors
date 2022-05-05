<template>
 <div class="containers">
   <div class="menus">
   <router-link :to="{name:'Home'}"  active-class="active">Home</router-link>
  <router-link :to="{name:'List'}" active-class="active">List</router-link>
  <router-link :to="{name:'newDoctor'}" active-class="active">New Doctors</router-link>
  <router-link :to="{name:'Setting'}" active-class="active">Sozlamalar</router-link>
 </div>
 </div>
 <router-view />
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
