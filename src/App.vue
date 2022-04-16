<template>
<div>
<div class="line"></div>


<CreateTracking />
<div class="line"></div>
  <div class="hidden">

    <div>Splits 30'</div>
    <div class="flex">
      <div>
        <input type="checkbox" name="splits">
        <label for="splits"></label>
      </div>
      <div>
        <input type="checkbox" name="splits">
        <label for="splits"></label>
      </div>
      <div>
        <input type="checkbox" name="splits">
        <label for="splits"></label>
      </div>
      

    </div>
    
  </div>
</div>
</template>

<script> 

import CreateTracking from './components/CreateTracking.vue'
export default {
  beforeMount(){
    console.log(this,'Before')

  },
  created(){
    console.log(this,'Created')
  }
  ,mounted(){
    console.log(this,'mounted')
    setTimeout(() => {
      this.$store.commit('add')
      
  
    }, 2000);
  },
  name: 'App', 
  components: {
    CreateTracking
},
  computed: {
    chiki() {
      return this.$store.state.chiki
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anek+Odia:wght@100;500;800&display=swap');

* {
  font-family: 'Anek Odia', sans-serif;
}
body {
  margin: 0;
}
.line {
  height: 2px;
  background-color: rgb(255, 104, 104);;
}

</style>