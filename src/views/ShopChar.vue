<template>
  <div class="home main-content">
    
    <div class="left-content slideUp level">
      <h1>Buy Account</h1>
         <router-link to="/services/pvp"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>
        <div class="row">
          <div class="col s6">
            <p class="sometxt">
              <b>Contact Us</b> <br>
              Please contact us, using one of the methods presented in the 
              "Contacts" at the bottom of the page.
            </p>
          </div>
          <div class="col s6">
            <p class="sometxt">
              <b>Payment </b><br>
              Pay a full amount of the order and wait for the confirmation of payment.
            </p>
          </div>        
        </div>
        <hr>
        <div class="row">
          <div class="col s6">
            <p class="sometxt">
              <b>Get Account</b> <br>
              We'll tell you the password and login of your account.
            </p>
          </div>
          <div class="col s6">
            <p class="sometxt">
             <b> Finality</b><br>
              When the account gotted, our manager will make screenshots confirming the deal.
            </p>
          </div>        
        </div>
   <hr>
            <div class="row my-row">
      <a href="skype:artemko819" class="waves-effect waves-light deep-orange darken-1 btn">SKYPE</a><hr>
            <a href="skype:artemko819" class="waves-effect waves-light deep-orange darken-1 btn">Email</a><hr>
                  <a href="skype:artemko819" class="waves-effect waves-light deep-orange darken-1 btn">Tlegram</a>
    </div>
       
        
        
    <router-link to="/services/gold"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
    
    </div>
    <div class="right-content img4">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'shopchar'  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 $page_color: #f4511e;
 .row{margin-bottom: 0}
 .level p {margin: 5px 0 5px 0; line-height: 20px;}
 .my-row a{width: 100%;}
  h1 {color:$page_color; font-size: 40px; }
  body .main-content .left-content h1 {color:$page_color}
  .img4{
    background:$page_color;;
    background-image:url(../assets/acc.jpg);
    background-position: 50%;
    background-size:cover;
    img{
      width:50%
    }
  }

</style>