<template>
  <div class="home main-content">
    
    <div class="left-content slideUp level">
      <h1>Profession Skill </h1>
         <router-link to="/services/powerlevel"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>
        <div class="row">
          <div class="col s6">
            <p class="sometxt">
              Profession Skill 1-300 <br>Server: <b>Northdale</b> <br>Price: <b>130$</b>
            </p>
          </div>
          <div class="col s6">
            <p class="sometxt">
              Profession Skill 1-300 <br>Server: <b>lightbringer</b> <br>Price: <b>80$</b>
            </p>
          </div>        
        </div>
        <hr>
        <div class="row">
          <div class="col s6">
            <p class="sometxt">
              Profession Skill 1-300 <br>Server: <b>Nighthaven</b> <br>Price: <b>80$</b>
            </p>
          </div>
          <div class="col s6">
            <p class="sometxt">
              Profession Skill 1-300 <br>Server: <b>Kronos III</b> <br>Price: <b>80$</b>
            </p>
          </div>        
        </div>
        <hr>
        <div class="row">
          <div class="col s6">
            <p class="sometxt">
              Profession Skill 1-300 <br>Server: <b>Kronos</b> <br>Price: <b>45$</b>
            </p>
          </div>
          <div class="col s6">
            <p class="sometxt">
             Profession Skill 1-450 <br>Server: <b>Angrathar</b> <br>Price: <b>150$</b>
            </p>
          </div>        
        </div>
        <hr>
                <div class="row">
          <div class="col s6">
            <p class="sometxt">
              Profession Skill 1-375 <br>Server: <b>Outland</b> <br>Price: <b>65$</b>
            </p>
          </div>
          <div class="col s6">
            <a href="skype:artemko819" class="waves-effect waves-light deep-orange darken-1 btn">Buy now</a>
          </div>        
        </div>
     <router-link to="/services/pvp"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
   
    
    </div>
    <div class="right-content img4">
     
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'profession'  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 $page_color: #f4511e;
 .row{margin-bottom: 0}
  .level p {margin: 5px 0 5px 0;}
  h1 {color:$page_color; font-size: 40px; }
  body .main-content .left-content h1 {color:$page_color}
  .img4{
    background:$page_color;;
    background-image:url(../assets/prof.jpg);
    background-position: 100%;
    background-size:cover;
    img{
      width:50%
    }
  }

</style>