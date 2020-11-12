<template>
  <div id="calendar">
      <nav-bar :topOfPage="true" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar';

export default {
  name: "Calendar",
  components: {
      NavBar
  }
};
</script>

<style>
</style>