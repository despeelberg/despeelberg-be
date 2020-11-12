<template>
  <div class="page">
      <nav-bar :topOfPage="true"></nav-bar>
      <section class="main">
          <div class="container">
              <div class="pageTitleWrap">
                <router-link to="/" :class="'back'"><fa :icon="['fas', 'angle-left']"></fa></router-link>
                <h1 class="pageTitle"><slot name="header"></slot></h1>
              </div>
              <!-- <emphasis :block="true" :type="'alert'">Er zijn dit jaar enkele maatregelen omtrent corona van kracht! Je vindt ze allemaal <router-link :class="'link'" to="/coronavirus">hier</router-link></emphasis> -->
              <slot></slot>
          </div>
      <!--     <div class="questions">
              <h2 class="q">Heb je nog vragen? Stel ze ons en we bezorgen jou een antwoord!</h2>
              <a class="q-link" href="mailto:info@despeelberg.be">Stuur ons een e-mail!</a> <br>
              <a class="q-link" href="https://www.messenger.com/t/despeelbergvzw" target="_blank">Stuur ons een bericht op Facebook!</a>
          </div> -->
      </section>
      <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
// import Block from '../components/Block'
// import Card from '../components/Card'
import Footer from '../components/Footer'
// import Emphasis from '../components/Emphasis'

export default {
    name: 'Page',
    components: {
        NavBar,
        Footer,
        // Emphasis
    }
}
</script>

<style >
.pageTitleWrap {
    display: flex;
    align-items: center;
    padding: 25px 0;
    
}

.main{
    flex: 1 0 auto;
}

a.back {
/*  background: #1a6ac1;
 */ color: #1a6ac1;
    padding: 10px;
    font-size: 28px;
    margin-right: 10px;
    border-radius: 5px;
}

.pageTitle {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 30px;
    
}

.container {
    width: 80%;
    margin: auto;
}

p {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 18px;
    margin: 10px 0;
    color: #333333;

}

a {
    text-decoration: none;
    color: inherit;
    
}

.page{
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}


.link {
    color: #1a6ac1;
}

.covid-banner {
    width: 80%;
    display: block;
}

.questions {
    background: rgba(239,239,239,0.7);
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.q {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    margin: 10px 0;
    
}
.page{
    min-height: 100%;
}



.q-link {
    display: block;
    padding: 10px;
    width: 50%;
    background: #1a6ac1;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    text-align: center;
    color: #ffffff;
}
</style>