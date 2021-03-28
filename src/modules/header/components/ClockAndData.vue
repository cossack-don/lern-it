<template>
  <div>ClockAndData.vue
      ClockAndData
      <div class="clock hour">
<!-- {{clock()}} -->
<!-- <div >333</div>  {{clock}} {{resultClock}}  -->
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            startClock:null,
            resultClock:'',
            clockHour:'',
            clockMin:'',
            clockSec:'',
            

        }
    },
computed:{
clock () {

const now = new Date();

this.clockHour = now.getHours();
this.clockMin = now.getMinutes();
this.clockSec = now.getSeconds();


  setTimeout(() => {
    if(this.clockSec < 10) {
      this.clockSec = "0" + this.clockSec;
    }
       
  if(this.clockMin < 10) {
    this.clockMin = "0" + this.clockMin;
  }
     
  if(this.clockHour < 10) {
      this.clockHour = "0" + this.clockHour;
  }
   this.startClock = this.clockHour + ":" + this.clockMin + ":" + this.clockSec;
  }, 1000);


 this.resultClock = this.startClock
},



},
methods:{






},
watch :{

}

}
</script>

<style>

</style>