<template>
   <div class="modal" v-show="active">
          Malumot Qo'shildi 
      </div>
  <div class="expert">
      <h1>Shifokorlar mutaxasisligi</h1>

      <div class="flex">
          <input type="text" v-model="expert.title">
      <button @click="add()"> qo'shish</button>
      </div>
  </div>

  <div class="box">
      <table border="1">
          <tr v-for="(exp,index) of experts" :key="index">
              <td>{{exp.id}}</td>
              <td>{{exp.title}}</td>
              <td><button @click="del(index)" class="del">delete</button></td>
          </tr>
      </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        expert:{},
        experts:[],
        active:false
    }
},
methods:{
    add(){
        axios.post(' http://localhost:3000/exps',this.expert).then(res=>{
            this.experts.push(res.data)
            this.expert ={}
             this.active=true
                                setTimeout(()=>{
                                this.active=false
                                },4000)
                                this.doctor = {
                                    
                                }
        })
    },
    del(index){
        if(confirm('haqiqattan ham rozimisz')){
  axios.delete('http://localhost:3000/exps/'+this.experts[index].id).then(res=>{
       
    
    
        console.log(res);
      this.experts.splice(index,1)
    

  })

}}
},
created(){
axios.get(' http://localhost:3000/exps').then(res=>{
    this.experts = res.data
})
}
}
</script>

<style>

</style>