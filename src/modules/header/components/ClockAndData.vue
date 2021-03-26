<template>
  <div>ClockAndData.vue
      ClockAndData
      <div class="clock hour">
<!-- {{clock()}} -->
<div @click="clock">333</div>{{c}}
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            clocks:''
        }
    },
computed:{
c(){
    this.go()
    
}
},
methods:{
clock() {
  //   var str = hours + ":" + minutes + ":" + seconds;
var now = new Date();

let sec = now.getHours();
let min = now.getMinutes();
let hour = now.getSeconds();

    if(hour < 10) {
      hour = "0" + hour;
    }
       
  if(min < 10) {
    min = "0" + min;
  }
     
  if(sec < 10) {
      sec = "0" + sec;
  }
  var str = sec + ":" + min + ":" + hour;
  
  console.log(str)
  this.clocks= str;
     
  

},
go() {
setTimeout("this.clock()", 1000);
console.log(22)
}
},

}
</script>

<style>

</style>