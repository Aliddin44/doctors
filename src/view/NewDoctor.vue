<template>
  <div class="container">
      <h1>New Doctor</h1>
      <div class="row">
          <div class="col-lg-6">
              <input type="text" placeholder="ismingiz" v-model="doctor.firstname" >
          </div>
          <div class="col-lg-6">
              <input type="text" placeholder="familiyangiz" v-model="doctor.lastname">
          </div>
          <div class="col-lg-6">
              <select name="" id="" v-model="doctor.doc">
                  <option value="xirurg">Xirurg</option>
                  <option value="lor">Lor</option>
                  <option value="nervopotolog">Nevropotolog</option>
              </select>
          </div>
          <div class="col-lg-6">
              <input type="time" v-model="doctor.time">
          </div>
          <div class="col-lg-6">
              <input type="text" placeholder="xonani raqami" v-bind="doctor.room" >
          </div>
          <div class="col-lg-6">
              <input type="number" v-model="doctor.exp" >
          </div>
          <button @click="add()">Jo'natish</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        doctor:{}
    }
},
methods:{
    add(){
        axios.post('  http://localhost:3000/doctors',this.doctor).then(
            res=> {
                console.log(res);
                this.doctor = {}
            }
        )
    }
}
}
</script>

<style>

</style>