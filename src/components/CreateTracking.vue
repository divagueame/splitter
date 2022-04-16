<template>
  <h1>Create!</h1>
  <form action="">
    <!-- Name -->
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" key="name">
    </div>
    <!-- Desired Frequency -->

    <div>
      <label for="daily">Daily</label>
      <input type="radio" name="daily" id="">
      
      Weekly
      Monthly
      Yearly

    </div>
  <!-- Submit -->
  </form>
</template>

<script>
export default {
  name: 'createTracking'
}
</script>

<style>

</style>