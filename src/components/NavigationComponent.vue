<template>
  <footer>
      <nav>
        <router-link class="link" to="/"><i class="fas fa-home" :class="{ active: $route.path=='/' }"></i></router-link>
        <router-link class="link" to="/dishes"><i class="fas fa-utensils" :class="{ active: $route.path=='/dishes' || $route.path=='/create-dish' }"></i></router-link>
        <router-link class="link" to="/lifestyle"><i class="fas fa-calendar-alt" :class="{ active: $route.path=='/lifestyle' }"></i></router-link>
        <router-link class="link" to="/info"><i class="fas fa-info-circle" :class="{ active: $route.path=='/info' }"></i></router-link>

      </nav>
  </footer>
</template>

<script>

export default {

};
</script>

<style lang="scss">

footer {
    background: #47bff7;
    z-index: 99;
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 4em;
    color: white;
    padding-bottom: 2em;
}

nav {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;


    
}

i {
  font-size: 2em;
  transition: .2s ease-in-out;
}

i.active {
  color:#153c77;
}

</style>

