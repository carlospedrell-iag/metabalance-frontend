<template>
  <footer>
      <nav>
        <router-link class="link nav" to="/"><i class="fas fa-home nav" :class="{ active: $route.path=='/' }"></i></router-link>
        <router-link class="link nav" to="/dishes"><i class="fas fa-utensils nav" :class="{ active: $route.path=='/dishes' || $route.path=='/create-dish' }"></i></router-link>
        <router-link class="link nav" to="/lifestyle"><i class="fas fa-calendar-alt nav" :class="{ active: $route.path=='/lifestyle' || $route.path=='/modify-diet' || $route.path=='/edit-meal' }"></i></router-link>
        <router-link class="link nav" to="/info"><i class="fas fa-info-circle nav" :class="{ active: $route.path=='/info' }"></i></router-link>

      </nav>
  </footer>
</template>

<script>

export default {

};
</script>

<style lang="scss">

footer {
    background: #55CF96;
    z-index: 99;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 4em;
    color: white;
    padding-bottom: 1em;
}

nav {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;


    
}

i.nav {
  color:white;
  
}
i {
  font-size: 2em;
  transition: .2s ease-in-out;

}

i.active {
  color:#126A44;
}

</style>

