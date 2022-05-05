<template>
  <div class="container">
      <h1>YAngi shifokor qo'shish</h1>
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
                 <option v-for="exp of experts" :key='exp.id' :value="exp.id">{{exp.title}}</option>
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
                <quill-editor
    v-model:value="doctor.bio"
    
  />
            </div>
          
          <button @click="add()">Jo'natish</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'



import { quillEditor } from 'vue3-quill'



export default {
data(){
    return{
        doctor:{
        },
        active:false,
        roomMsg :false,
        experts:[]
    }
},
components:{

quillEditor

},
methods:{
    add(){
        axios.get(' http://localhost:3000/doctors?room='+this.doctor.room).then(res=>{
            if(res.data.length>0){
            this.roomMsg =true
            setTimeout(()=>{
                                this.roomMsg=false
                                },3000)
            }else{
                axios.post('http://localhost:3000/doctors',this.doctor).then(
                            res=> {
                                console.log(res);
                                this.active=true
                                setTimeout(()=>{
                                this.active=false
                                },4000)
                                this.doctor = {
                                    
                                }
                            }
                        )
            }
        })
       
    }
},
created(){
    axios.get('http://localhost:3000/exps').then(res=>{
        this.experts = res.data
    })
}
}
</script>

<style>

</style>