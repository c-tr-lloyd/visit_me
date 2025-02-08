<script setup>

</script>

<template>

  <div id='opening'> 
    <div id='logo_name'>
      <router-link to='/'><img src='./assets/full_cust_logo.png' height='100px'></router-link>
    </div>

    <div class='nav'>
      <router-link to='./funny'><strong>About Page</strong></router-link>
      <router-link to='./funny'><strong>Projects</strong></router-link>
    </div>
  </div>

  <router-view /> 


  <footer>
      <a href='https://github.com/c-tr-lloyd' target="_blank" rel="noopener noreferrer"><img src="./assets/github_green.svg" width='75' height='75'></a>
      <router-link to='./funny'><img src="./assets/dark_green_x_logo.svg" width='75' height='75'/></router-link>
  </footer>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
