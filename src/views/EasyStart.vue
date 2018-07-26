<template>
  <div class="home main-content">
    
    <div class="left-content slideUp">
      <h1>Easy start </h1>
      <div class="row">
        <div class="col s6">
          <p>Server : <b>All</b></p>
          <p class="sometxt">
            level : <b>1-20</b>
          </p>
        </div>
        <div class="col s6">
          <p>Bags : <b>16 slots X 4</b></p>
            <p class="sometxt">
              Gold : <b>10</b>
          </p>
        </div>
      </div>
      <hr>
        <h5>Price: <b> 75$</b></h5>       

    <hr>
    <h4>Contacts</h4>
    <div class="row my-row">
      <a href="skype:artemko819" class="waves-effect waves-light deep-orange darken-1 btn">SKYPE</a><hr>
            <a href="skype:artemko819" class="waves-effect waves-light deep-orange darken-1 btn">Email</a><hr>
                  <a href="skype:artemko819" class="waves-effect waves-light deep-orange darken-1 btn">Tlegram</a>
    </div>
      
    </div>

    <div class="right-content img1">
      <router-link  class="button1" to="/">GO Home</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /sr

export default {
  name: 'easyStart'
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my-row a{width: 100%;}
h5{
  text-align: center;
  text-transform: uppercase;
  margin: 0;
}
.button1{width: 80%; text-align: center;}
  .img1{
    background: url(../assets/home.jpg);
    background-position:30%;
    background-position-y: 0px;
    filter: grayscale(100%); 
  }

</style>