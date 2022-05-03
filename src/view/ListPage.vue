<template>
  <div class="litsPage">
    <h1>Barcha shifokorlar ro'yxati</h1>
    <div class="container">
      <table border='1'>
        <tr>
          <th>id</th>
          <th>Ismi</th>
          <th>lavozim</th>
          <th>batafsil</th>
          <th></th>
        </tr>
        <tr v-for="(doctor,index) of doctors" :key="index">
          <td>{{doctor.id}}</td>
          <td>{{doctor.firstname}}</td>
          <td>{{doctor.exp}}</td>
          <td><router-link :to='"/doctor/"+doctor.id'> batafsil</router-link></td>
          <td><button @click="del(index)">delete</button></td>
          <td><router-link :to='"/doctor/edit/"+doctor.id'> edit</router-link></td>

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
methods:{
del(index){
  axios.delete('http://localhost:3000/doctors/'+this.doctors[index].id).then(res=>{
    if(confirm('haqiqattan ham rozimisz')){
      this.doctors = res.data
      // this.doctors.splice(index,1)
    }

  })

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