<template>
  <div class="home main-content img5">
    
    <div class="left-content slideUp">
      <h1>ABOUT ME</h1>

        <p class="sometxt">Lorem Ipsum - это текст-"рыба", часто используемый в печати и
       вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с 
       начала XVI века.</p>
       <router-link  class="button1" to="/portfolio/one">Look  my work</router-link>

    </div>

    <div class="right-content ">
      <p class="sometxt">Lorem Ipsum - это текст-"рыба", часто используемый в печати и
       вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с 
       начала XVI века.Lorem Ipsum - это текст-"рыба", часто используемый в печати и
       вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с 
       начала XVI века.</p>
        <p class="sometxt">Lorem Ipsum - это текст-"рыба", часто используемый в печати и
       вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с 
       начала XVI века.Lorem Ipsum - это текст-"рыба", часто используемый в печати и
       вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с 
       начала XVI века.</p>
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
    html body .right-content{
      background:#fff;
      padding:70px;
     
    }
  .img5{
    background-color: #f0ff00;
  }

</style>