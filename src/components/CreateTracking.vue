<template>
  <div class="container w-full mx-auto px-72 bg-white dark:bg-blue-800">
    <h1 class="" @click="toggleDarkMode">Create!</h1>
    <form action="" class="w-full p-2 my-8 border-4 border-blue-700 rounded-xl shadow-lg ">
      <!-- Name -->
      <div class="flex">
        <label for="name" class="w-1/2">Name</label>
        <input class="p-1" type="text" name="name" placeholder="Name your " required key="name">
      </div>
      <!-- Target: Reps / Time -->
      <div class="targetIsTime flex items-center">
        <div class="">Reps</div>
        <label class="switch mx-2">
          <input type="checkbox" v-model="this.targetIsTime">
          <span class="slider round"></span>
        </label>
        <div class="py-4">Time</div>
      </div>
      <div v-show="!targetIsTime" class="flex gap-2">
        <div  class="w-1/2">Reps Selected</div>
        <input type="number" v-model="targetReps" name="reps">
      </div>

      <div v-show="targetIsTime" class="flex gap-2">
        <div class="w-1/2">Time Selected </div>
        <input type="number" v-model="targetMinutesTime" name="targetMinutesTime"  @change="parseMinutes">:
        <input type="number" v-model="targetSecondsTime" name="targetSecondsTime" @change="parseSeconds">
      </div>
      <div> 
        <div class="flex gap-2 w-1/2 bg-blue-600 rounded-md p-2">
          <div class="">Sets:</div>
          <input type="number" v-model="targetSets" name="sets">
        </div>
      </div>
      
      <!-- Select Days -->
      <div class="p-2 flex gap-2">
        <div v-for="(day, i) in days" v-bind:key="i">
          <div class="p-1">
            <input type="checkbox" v-bind:id="'dayValue'+ i" v-model="daysValues[i]">
            <label v-bind:for="'dayValue'+ i" >{{ day }}</label>
          </div>
        </div> 
      </div>
    <!-- Submit -->
      <button class="px-2 py-1 rounded-sm my-2 bg-blue-600">Create</button>
    </form>
    
    <!-- Information Card -->
    <div class="bg-blue-700 text-white p-2">
      <div class="flex gap-2">
        <div class="" v-for="(day,i) in totalDays" v-bind:key="i">
          {{ day }}
        </div>
      </div>
      <div>
        Target Time:
        {{ this.targetMinutesTime }} : {{ this.targetSecondsTime }}
      </div>
      <div>
        Target Sets:
        {{ targetSets }}
      </div>
      <div>
        <!-- Reps or time -->
        <div v-show="!targetIsTime">
          Total Reps:
        {{ totalReps }}
        </div>
        <div v-show="targetIsTime">
          Total Time:
        {{ totalTime }}
        Parse:
        {{ parsedTotalTime }}
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'createTracking',
  data() {
    return {
      targetIsTime: true, 
      targetMinutesTime: 0,
      targetSecondsTime: 30,
      targetSets: 3,
      targetReps: 20,
      days: ['Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday','Sunday'],
      daysValues: [true,true,true,true,true,true,true]
    }
  },
  
  methods: {
    toggleDarkMode(){
      console.log('Togle')
    },
    parseSeconds(){
      if(this.targetSecondsTime==60){
        this.targetSecondsTime = 0;
        this.targetMinutesTime += 1;
      }
      if((this.targetSecondsTime == -1) &&(this.targetMinutesTime > 0 )){
        this.targetSecondsTime = 59;
        this.targetMinutesTime -= 1;
      }
      if((this.targetSecondsTime == -1) &&(this.targetMinutesTime == 0 )){
        this.targetSecondsTime = 0;
      }
    },
    parseMinutes(e){
      if(e.target.value < 0){
        this.targetMinutesTime = 0;
      }
      if((e.target.value > 59 )){
        this.targetMinutesTime == 59
      }
    }
  },
  computed: {
    totalDays(){
      let selectedDays = [];
      this.daysValues.forEach((dayValue,i) => {
        if(dayValue==true){
          selectedDays.push(this.days[i])
        }
        
      });   
      
      return selectedDays
      
    },
    totalReps(){
      return this.targetSets * this.targetReps
    },
    totalTime(){
      return this.targetSets * ((60 * this.targetMinutesTime) + this.targetSecondsTime)
    },
    parsedTotalTime(){
      var measuredTime = new Date(null);
      let secs = this.targetSets * ((60 * this.targetMinutesTime) + this.targetSecondsTime);
      measuredTime.setSeconds(secs);
      measuredTime = measuredTime.toISOString().substr(11, 8); // specify value of SECONDS
      return measuredTime
    }
  }
}




</script>

<style>
input {
  /* border: 2px solid black */
  outline: none;
  border: none;
  border-bottom: 1px solid rgb(167, 167, 167);
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(255, 94, 94);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


</style>