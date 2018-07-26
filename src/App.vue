<template>
  <div id="app">
     <div class="container1">
      <div class="inner">

        <nav>
          <router-link to="/" id="logo">WOW BOOST</router-link>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/services/gold" >Gold</router-link></li>
            <li><router-link to="/services/powerlevel" >POWER LEVELING</router-link></li>
            <li><router-link to="/services/profession" >Profession</router-link></li>
            <li><router-link to="/services/pvp" >Pvp</router-link></li>
            <li><router-link to="/services/shop-char" >BUY ACCOUNT</router-link></li>
          </ul>
        </nav>

        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>

      </div>
     </div>
  </div>
</template>

<style lang="scss" src='./global.scss'>
  
</style>
