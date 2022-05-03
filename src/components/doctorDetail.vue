<template>
  <h1>{{id}} Doctor</h1>
  <div class="card" >
      <div class="box">
        <div class="row">
           <div class="col-lg-6">
            <div class="img" :style="{ backgroundImage: 'url(' + doctor.img + ')' }"></div>
         </div>
         <div class="col-lg-4">
           <div class="name">
             <div class="title">Ism Familiyasi</div> 
             <div class="info">
                {{doctor.firstname}} <span>{{doctor.lastname}}</span>
             </div>
           </div>
           <div class="exp">
             <div class="title">Mutaxasisligingiz
               <div class="info">{{doctor.exp}}</div>
             </div>
           </div>
           <div class="time">
             <div class="title">Bo'sh vaqti</div>
             <div class="info">{{doctor.time}}</div>
           </div>
           <div class="room">
             <div class="title">Xona raqami</div>
             <div class="info">{{doctor.room}}</div>
           </div>
           <div class="doc">
             <div class="title">Ish tajribasi</div>
             <div class="info">{{doctor.doc}}</div>
           </div>
           <div class="place">
             <div class="title">Yashash manzili</div>
             <div class="info">{{doctor.place}}</div>
           </div>
         </div>
         <div class="col-lg-12">
           <div class="titleA">Shifokor haqida malumot</div>
           <div class="info">
             {{doctor.biog.ops}}
           </div>
         </div>
        </div>


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
.title{
  font-size: 24px;
  font-weight: bold;
  display: block;
  text-align: left;
  margin-bottom: 15px;

}
.info{
  font-size: 20px;
  font-weight: 600;
  color: rgba(20, 33, 20, 0.933);
  text-align: left;
margin-bottom: 15px;
margin-top: 15px;
}
.titleA{
  font-size: 24px;
  font-weight: bold;
  display: block;
  text-align: center;
  margin-bottom: 15px;
  margin-top: 30px;

}
</style>