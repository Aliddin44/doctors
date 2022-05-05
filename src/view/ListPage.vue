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
          <td>{{getExp(doctor.exp)}}</td>
          <td><router-link :to='"/doctor/"+doctor.id'> batafsil</router-link></td>
          <td><button @click="del(index)" class="del">delete</button></td>
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
    doctors:[],
    experts:[]
  }
},
methods:{
  getExp(index){
    let title = ''
      this.experts.find(elem=>{
        if(elem.id == index){
          title = elem.title
        }
      })
      return title
  },
 del(index){
        if(confirm('haqiqattan ham rozimisz')){
  axios.delete('http://localhost:3000/doctors/'+this.doctors[index].id).then(res=>{
       
    
    
        console.log(res);
      this.doctors.splice(index,1)
    

  })

}}
},
created(){
  axios.get('  http://localhost:3000/doctors').then(res=>{this.doctors = res.data; console.log(res.data);})
  axios.get('  http://localhost:3000/exps').then(res=>{this.experts = res.data; console.log(res.data);})
}
}
</script>

<style>

</style>