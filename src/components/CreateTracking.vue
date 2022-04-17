<template>
  <div class="container mx-auto px-72 bg-blue-100 dark:bg-blue-800">
    <h1 class="" @click="toggleDarkMode">Create!</h1>
    <form action="" class="p-2">
      <!-- Name -->
      <div>
        <label for="name">Name</label>
        <input class="p-1" type="text" name="name" placeholder="Name your " required key="name">
      </div>
      <div class="line"></div>
      <!-- Target: Reps / Time -->
      <div class="targetIsTime flex items-center">
        <div>Reps</div>
        <label class="switch mx-2">
          <input type="checkbox" v-model="this.targetIsTime">
          <span class="slider round"></span>
        </label>
        <div class="py-4">Time</div>
      </div>
      <div v-show="!targetIsTime">
        Reps Selected
        <input type="number" v-model="targetReps" name="reps">
      </div>

      <div v-show="targetIsTime">
        Time Selected 
        <input type="number" v-model="targetMinutesTime" name="targetMinutesTime"  @change="parseMinutes">:
        <input type="number" v-model="targetSecondsTime" name="targetSecondsTime" @change="parseSeconds">
      </div>
      <div> 
        Sets:
        <input type="number" v-model="targetSets" name="sets">
      </div>
      <div class="line"></div>
      
      <!-- Frecuency -->
      
      
      <!-- Monday -->
      <div>
        <input type="checkbox" id="checkmonday" v-model="monday">
        <label for="checkmonday">Monday</label>
      </div>
      <!-- Tuesday -->
      <div>
        <input type="checkbox" id="checktuesday" v-model="tuesday">
        <label for="checktuesday">Tuesday</label>
      </div>
      <!-- Wednesday -->
      <div>
        <input type="checkbox" id="checkwednesday" v-model="wednesday">
        <label for="checkwednesday">Wednesday</label>
      </div>
      <!-- Thursday -->
      <div>
        <input type="checkbox" id="checkthursday" v-model="thursday">
        <label for="checkthursday">Thursday</label>
      </div>
      <!-- Friday -->
      <div>
        <input type="checkbox" id="checkfriday" v-model="friday">
        <label for="checkfriday">Friday</label>
      </div>
      <!-- Saturday -->
      <div>
        <input type="checkbox" id="checksaturday" v-model="saturday">
        <label for="checksaturday">Saturday</label>f
      </div>
      <!-- Sunday -->
      <div>
        <input type="checkbox" id="checksunday" v-model="sunday">
        <label for="checksunday">Sunday</label>
      </div>

      <button class="px-2 py-1 rounded-sm my-2 bg-blue-600">Create</button>
    <!-- Submit -->
    </form>
 {{ this.selectedDays }}

    <!-- Information Card -->
    <div class="bg-blue-700 text-white p-2">
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
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
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