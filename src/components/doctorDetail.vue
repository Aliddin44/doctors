<template>
  <h1>{{id}} Doctor</h1>
  <div class="card" >
      <div class="box">
          <img src="" alt="">
          <div class="id">ismi: {{doctor.firstname}}</div>
          <div class="name">Familiasi :{{doctor.lastname}}</div>
          <div class="exp">tajribasi:{{doctor.exp}}yil</div>
          <div class="time">bosh vaqti:{{doctor.time}}</div>
          <div class="depart">mutaxasisligi:{{doctor.doc}}</div>

      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
props:['id'],
data(){
    return{
        doctor: {}
    }
},
created(){
  axios.get('  http://localhost:3000/doctors/'+this.id).then(res=>{
    this.doctor = res.data
    console.log(res.data);
  })
}
}
</script>

<style>

</style>