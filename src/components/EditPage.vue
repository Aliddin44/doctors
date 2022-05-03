<template>
  <div class="container">
      <h1> shifokor malumotlarini tahrirlash</h1>
      <div class="modal" v-show="active">
          Malumot Qo'shildi 
      </div>
      <div class="row">
          <div class="col-lg-6">
              <label for="">Ismingiz</label>
              <input type="text" placeholder="ismingiz" v-model="doctor.firstname" >
          </div>
          <div class="col-lg-6">
              <label for="">Familiyangiz</label>
              <input type="text" placeholder="familiyangiz" v-model="doctor.lastname">
          </div>
          <div class="col-lg-6">
              <label for="">Mutaxasisligingiz</label>
              <select name="" id="" v-model="doctor.exp">
                  <option value="xirurg">Xirurg</option>
                  <option value="lor">Lor</option>
                  <option value="nervopotolog">Nevropotolog</option>
              </select>
          </div>
          <div class="col-lg-6">
              <label for="">Bo'sh vaqtingiz</label>
              <input type="time" v-model="doctor.time">
          </div>
          <div class="col-lg-6">
              <label for="">Xona raqami</label>
              <input type="text" placeholder="xonani raqami" v-model="doctor.room" >
              <span v-show="roomMsg" style="color:red;">bu xona band</span>
          </div>
          <div class="col-lg-6">
              <label for="">Ish tajribangiz</label>
              <input type="number" v-model="doctor.doc" >
          </div>
          <div class="col-lg-6">
              <label for="">Rasm manzili</label>
              <input type="url" v-model="doctor.img" >
          </div>
          <div class="col-lg-6">
              <label for="">yashash manzili</label>
              <select name="" id="" v-model="doctor.place">
                  <option value="Toshkent">Toshkent</option>
                  <option value="Buxoro">Buxoro</option>
                  <option value="Samarqand">Samarqand</option>
              </select>
          </div>
          <div class="col-lg-12">
                 <QuillEditor theme="snow" v-model:content="doctor.biog" />
          </div>
          <button @click="save()">saqla</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
    props:['id'],
data(){
    return{
        doctor:{},
        active:false,
        roomMsg :false
    }
},
components:{
QuillEditor

},
methods:{
save(){
    axios.put('http://localhost:3000/doctors/'+this.id,this.doctor).then(res=>{
        if(res.status == 200){
            this.$router.push('/list')
        }

    })
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
label{
    width: 100%;
    color: black;
    font-size: 22px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 10px;
    display: block;
}
.col-lg-12{
    width: 100%;
    max-width: 100%;
    flex-basis: 100%;
    padding: 10px;
}
.modal{
    position: fixed;
    right: 30px;
    top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    color: #fff;
    background-color: #2e2e;
    border-radius: 8px;
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: bold;

}
</style>