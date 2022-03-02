<template>
    <header>
        <div class="left"> </div>
        <img class="header_logo" src="@/assets/outgenieros_small.png" />
        <div class="right"> </div>
    </header>
  
</template>

<script>
export default {

}
</script>

<style>

header{

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #47bff7;
    z-index: 99;
    width: 100%;
    position: fixed;
    top: 0;
    height: 4em;
    color: white;
}

.header_logo {
    width: 3em;
    height: 3em;
}
</style>