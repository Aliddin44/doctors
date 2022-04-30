<template>
  <div class="litsPage">
    <div class="container">
      <table border='1'>
        <tr>
          <th>id</th>
          <th>Ismi</th>
          <th>lavozim</th>
          <th>batafsil</th>
        </tr>
        <tr v-for="(doctor,index) of doctors" :key="index">
          <td>{{doctor.id}}</td>
          <td>{{doctor.firstname}}</td>
          <td>{{doctor.exp}}</td>
          <td><router-link :to='"/doctor/"+doctor.id'> batafsil</router-link></td>
        </tr>
      </table>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
data(){
  return{
    doctors:[]
  }
},
created(){
  axios.get('  http://localhost:3000/doctors').then(res=>{
    this.doctors = res.data
    console.log(res.data);
  })
}
}
</script>

<style>

</style>