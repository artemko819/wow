<template>
  <div class="home main-content">
    
    <div class="left-content slideUp">
      <h1>Gold</h1>        
        <p class="sometxt">Cheapest WoW Gold on Private Servers. Hand Farmed. 100% Safe. 
Fast Delivery.</p>
       <form >
         <input type="number" v-model="goldValue">
         <div class="row">
           <div class="col s6">
              <p>
          <label>
            <input name="group1" 
                  type="radio"
                  value="Northdale"
                  class="with-gap"
                  v-model="nameServer" 
            />
            <span>Northdale</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" 
                   value="Lightbringer" 
                   v-model="nameServer"  
                   type="radio" 
                   class="with-gap"
            />
            <span>Lightbringer</span>
          </label>
        </p>
        <p>
          <label>
            <input class="with-gap" 
                    name="group1" 
                    type="radio"
                    v-model="nameServer"
                    value="Nighthaven"  
            />
            <span>Nighthaven</span>
          </label>
        </p>
        <p>
          <label>
            <input class="with-gap" 
                    name="group1" 
                    type="radio"
                    v-model="nameServer"
                    value="Kronos |||"  
            />
            <span>Kronos ||| </span>
          </label>
        </p>
           </div>
            <div class="col s6">
             <p>
          <label>
            <input name="group1" 
                  type="radio"
                  value="KRONOS"
                  class="with-gap"
                  v-model="nameServer" 
            />
            <span>KRONOS</span>
          </label>
        </p>
        <p>
          <label>
            <input name="group1" 
                   value="Angrathar" 
                   v-model="nameServer"  
                   type="radio" 
                   class="with-gap"
            />
            <span>Angrathar</span>
          </label>
        </p>
        <p>
          <label>
            <input class="with-gap" 
                    name="group1" 
                    type="radio"
                    v-model="nameServer"
                    value="Outland"  
            />
            <span>Outland</span>
          </label>
        </p>
           </div>
         </div>      
         
       </form>
       <div class="row">
         <div class="col my s8"><p>Selected server:<b> {{nameServer}}</b><br/>Total price: <b>{{sumGold}} $</b></p></div>
         <div class="col s4"><a href="skype:artemko819" class="waves-effect waves-light deep-orange darken-1 btn">Buy now</a></div>
       </div>
      

      <router-link to="/services/powerlevel"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
    </div>

    <div class="right-content img2">
     
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'gold',  
  data(){
    return{
      goldValue:1000,
      price:0,
      nameServer:'Northdale'
    }
  },
  computed:{
    sumGold(){
      if(this.nameServer === 'Northdale'){
        return this.price =(this.goldValue * 0.33).toFixed(2)        
      }
       if(this.nameServer === 'Lightbringer'){
        return this.price =(this.goldValue * 0.03).toFixed(2)        
      }
       if(this.nameServer === 'Nighthaven'){
        return this.price =(this.goldValue * 0.03).toFixed(2)        
      }
       if(this.nameServer === 'Kronos |||'){
        return this.price =(this.goldValue * 0.07).toFixed(2)        
      }
      if(this.nameServer === 'KRONOS'){
        return this.price =(this.goldValue * 0.05).toFixed(2)        
      }
      if(this.nameServer === 'Angrathar'){
        return (          
          this.price =(this.goldValue * 0.01).toFixed(2) 
          )       
      }
      if(this.nameServer === 'Outland'){
        return (          
          this.price =(this.goldValue * 0.08).toFixed(2) 
          )       
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 $page_color: #f4511e;;
  .my p {margin: 0;}
  body .main-content .left-content h1 {color:$page_color; font-size: 40px}
  .img2{
    background-image:url(../assets/gold.jpg);
    background-size:cover;
    background-position:50%;
  }
  body [type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:after{
    background-color:  #f4511e;;
  }
  body [type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:before, [type="radio"].with-gap:checked+span:after{
    border:2px solid  #f4511e;
  }

</style>