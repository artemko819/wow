<template>
  <div class="home main-content">
    
    <div class="left-content slideUp">
      <h1>3 YEARS Bosting </h1>

        <p class="sometxt">
        We have been working in this field for a long time and realized a huge number of your desires!</p>
        <p class="sometxt">
All our employees have been tested, we do not trust your
            accounts to unverified people. </p>
    <hr>
    <h4>Contacts</h4>
    <div class="row my-row">
      <a href="skype:artemko819" class="waves-effect waves-light deep-orange darken-1 btn">SKYPE</a><hr>
            <a href="skype:artemko819" class="waves-effect waves-light deep-orange darken-1 btn">Email</a><hr>
                  <a href="skype:artemko819" class="waves-effect waves-light deep-orange darken-1 btn">Tlegram</a>
    </div>
      
    </div>

    <div class="right-content img1">
      <router-link  class="button1" to="/services/easy-start">Easy start</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /sr

export default {
  name: 'home'
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my-row a{width: 100%;}
  .img1{
    background: url(../assets/home.jpg);
    background-position:30%;
    background-position-y: 0px;
  }
  .button1{width: 80%; text-align: center}

</style>