<template>
  <div class="home main-content">
    
    <div class="left-content slideUp">
      <h1>Power Leveling</h1>
         <router-link to="/services/gold"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>
        <p class="sometxt">Professionally Hand Leveling. 
          Reliable and Fast Service of Boosting. Experience. 
          Cheap Price.
        </p>
        <form >
         <div class="row">
          <div class="col s6">
            <input type="number" :min="minVal" :max="maxVal" v-model="min">
          </div>
           <div class="col s6">
            <input type="number" :min="minVal" :max="maxVal" v-model="max">
          </div>
          </div>
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
         <div class="col my s8">
           <p >Selected server:
             <b> {{nameServer}}</b>
             <br/>
             Total price:
              <b>{{ sumGold - sale }}$(discount-{{sale }}$)</b>
            </p>
          </div>
         <div class="col s4"><a href="skype:artemko819" class="waves-effect waves-light deep-orange darken-1 btn">Buy now</a></div>
       </div>
       
      <router-link to="/services/profession"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
    </div>

    <div class="right-content img3">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'powerLevel',  
  data(){
    return{
      minVal:1,
      maxVal:60,
      min:1,
      max:60,
      goldValue:1000,
      price:0,
      sale:24.5,    
      nameServer:'Northdale'
    }
  },
  computed:{  
    sumGold(){
      if(this.nameServer === 'Northdale'){ 

          if(this.min>1 || this.max <60){
            this.sale =0
            console.log(this.sale)
          }else {  this.sale =24.5
            console.log(this.sale)}
          if(this.max >60){
            this.max= 60;
          }
           if(this.min >59){
            this.min= 59;
          }         
          
        if(this.min > this.max){return this.price = 0}
        if(this.min>=40){
              return this.price=((this.max-this.min)*7).toFixed(2)  
        }else if(this.min < 50) {
          return (            
            this.price=((this.max-this.min)*5.5).toFixed(2)  
          )  
        }
       
      }

       if(this.nameServer === 'Lightbringer'){
                           
          if(this.min>1 || this.max <60){
            this.sale =0
            console.log(this.sale)
          }else {  this.sale =36
            console.log(this.sale)}
          if(this.max >60){
            this.max= 60;
          }
           if(this.min >59){
            this.min= 59;
          }         
          
        if(this.min > this.max){return this.price = 0}
        if(this.min>=40){
              return this.price=((this.max-this.min)*5).toFixed(2)  
        }else if(this.min < 50) {
          return (            
            this.price=((this.max-this.min)*4).toFixed(2)  
          )  
        }
             
      }
       if(this.nameServer === 'Nighthaven'){
                  if(this.min>1 || this.max <60){
            this.sale =0
            console.log(this.sale)
          }else {  this.sale =45
            console.log(this.sale)}
          if(this.max >60){
            this.max= 60;
          }
           if(this.min >59){
            this.min= 59;
          }         
          
        if(this.min > this.max){return this.price = 0}
        if(this.min>=40){
              return this.price=((this.max-this.min)*6).toFixed(2)  
        }else if(this.min < 50) {
          return (            
            this.price=((this.max-this.min)*5).toFixed(2)  
          )  
        }       
      }
       if(this.nameServer === 'Kronos |||'){
          if(this.min>1 || this.max <60){
            this.sale =0
            console.log(this.sale)
          }else {  this.sale =45
            console.log(this.sale)}
          if(this.max >60){
            this.max= 60;
          }
           if(this.min >59){
            this.min= 59;
          }         
          
        if(this.min > this.max){return this.price = 0}
        if(this.min>=40){
              return this.price=((this.max-this.min)*6).toFixed(2)  
        }else if(this.min < 50) {
          return (            
            this.price=((this.max-this.min)*5).toFixed(2)  
          )  
        }       
      }
      if(this.nameServer === 'KRONOS'){
        if(this.min>1 || this.max <60){
            this.sale =0
            console.log(this.sale)
          }else {  this.sale =27
            console.log(this.sale)}
          if(this.max >60){
            this.max= 60;
          }
           if(this.min >59){
            this.min= 59;
          }         
          
        if(this.min > this.max){return this.price = 0}
        if(this.min>=40){
              return this.price=((this.max-this.min)*6).toFixed(2)  
        }else if(this.min < 50) {
          return (            
            this.price=((this.max-this.min)*3).toFixed(2)  
          )  
        }   
      }
      if(this.nameServer === 'Angrathar'){
        this.maxVal = 80;
        this.max = 80;
        this.min = 1; 
        if(this.min>1 || this.max <80){
            this.sale =0
            console.log(this.sale)
          }else {  this.sale =37
            console.log(this.sale)}
          if(this.max >80){
            this.max= 80;
          }
           if(this.min >79){
            this.min= 79;
          }         
          
        if(this.min > this.max){return this.price = 0}
        if(this.min>=40){
              return this.price=((this.max-this.min)*6).toFixed(2)  
        }else if(this.min < 50) {
          return (            
            this.price=((this.max-this.min)*3).toFixed(2)  
          )  
        }      
      }
      if(this.nameServer === 'Outland'){
      this.maxVal = 70;
        this.max = 70;
        this.min = 1; 
        if(this.min>1 || this.max <70){
            this.sale =0
            console.log(this.sale)
          }else {  this.sale =23.5
            console.log(this.sale)}
          if(this.max >70){
            this.max= 70;
          }
           if(this.min >69){
            this.min= 69;
          }         
          
        if(this.min > this.max){return this.price = 0}
        if(this.min>=40){
              return this.price=((this.max-this.min)*6).toFixed(2)  
        }else if(this.min < 50) {
          return (            
            this.price=((this.max-this.min)*1.5).toFixed(2)  
          )  
        }           
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 $page_color: #f4511e;
  body [type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:after{
    background-color:  #f4511e;;
  }
  body [type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:before, [type="radio"].with-gap:checked+span:after{
    border:2px solid  #f4511e;
  }
 .my p {margin: 0;}
  body .main-content .left-content h1 {color:$page_color; font-size: 40px;}
  .img3{
    background:url(../assets/phone.jpg) center no-repeat;
  background-position: 50%;
    background-position-y: 62px;
    background-size:cover;
    img{
      width:50%
    }
  }

</style>