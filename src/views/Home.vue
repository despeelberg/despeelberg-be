<template>
  <div class="home">
    <slideshow></slideshow>
    <nav-bar v-bind:topOfPage="false"></nav-bar>
    <section id="main">
      <div class="container">
        <!-- <block blockTitle="Inschrijvingen" :id="'inschrijvingen'">
          <card 
          v-bind:title="'Inschrijvingen'"
          v-bind:type="'info'"
          v-bind:clickable="true"
          :intern="false"
          :href="'https://inschrijven.despeelberg.be'"
          >
            De inschrijvingen voor augustus beginnen op maandag 20 juli, om 17u30. Deze eindigen op woensdag 29 juli.
          </card>
        </block> -->

        <!-- <block blockTitle="Maatregelen i.v.m. het coronavirus (Covid-19)" :id="'covid'">
          <card 
          v-bind:title="'Maatregelen'"
          v-bind:type="'alert'"
          v-bind:clickable="true"
          :href="'coronavirus'"
          >
            Ook wij zijn genoodzaakt om maatregelen te nemen tegen het coronavirus. <br> Bekijk hier hoe wij dit aanpakken.
          </card>
        </block> -->

        <block blockTitle="Info" :id="'info'">
          <card
            :title="'Voor ouders'"
            :type="'info'"
            :clickable="true"
            :href="'ouders'"
          >
            Alle informatie voor ouders. <br />
            Waar ligt het speelplein? Mag mijn kind al komen spelen? Hoeveel
            kost een dag op het speelplein?
          </card>
          <card
            :title="'Voor animatoren'"
            :type="'info'"
            :clickable="true"
            :href="'animatoren'"
          >
            Ben je 16 jaar of ouder en heb je zin om animator te worden bij ons?
            Je bent altijd welkom!
          </card>
        </block>

        <block blockTitle="Kalender 2022" :id="'kalender'">
          <card
            :title="'Paasvakantie'"
            :type="'info'"
            :clickable="false"
            :href="'kalender'"
          >
            Van 11 tot en met 15 april 2022.
          </card>
          <card
            :title="'Zomervakantie'"
            :type="'info'"
            :clickable="false"
            :href="'kalender'"
          >
            Van 4 tot en met 15 juli en van 15 tot en met 31 augustus 2022.
          </card>
        </block>

        <block blockTitle="Wie zijn wij?">
          <card
            :title="'De PIT'"
            :clickable="true"
            :href="'pit'"
            :type="'info'"
          >
            Professioneel, Innovatief en Tof! Onze stuurgroep staat altijd voor
            jullie klaar!
          </card>
          <card
            :title="'Onze visie'"
            :clickable="true"
            :href="'visie'"
            :type="'info'"
          >
            We willen elk kind een echt vakantiegevoel bezorgen door hen tot
            intens spelen te laten komen: niet zomaar spelen, maar zo hard
            spelen dat je alles rond je vergeet.
          </card>
        </block>

        <block blockTitle="Foto's" :id="'fotos'">
          <card
            :title="'Foto\'s'"
            :clickable="true"
            :type="'info'"
            :intern="false"
            :href="'https://www.facebook.com/despeelbergvzw/photos'"
          >
            Alle foto's kan je bekijken op onze facebookpagina.
          </card>
          <card
            :title="'Instagram'"
            :clickable="true"
            :type="'info'"
            :href="'https://www.instagram.com/speelpleindespeelberg/'"
            :intern="false"
          >
            Je kan ons ook volgen op Instagram voor een kijkje achter de
            schermen!
          </card>
        </block>

        <block blockTitle="Contact" :id="'contact'">
          <card
            :title="'Via mail'"
            :clickable="true"
            :href="'mailto:info@despeelberg.be'"
            :intern="false"
            :type="'info'"
          >
            De eenvoudigste manier om ons te bereiken is via e-mail. Dit kan op
            het adres: info@despeelberg.be
          </card>
        </block>
        <block>
          <card
            :title="'Via Facebook'"
            :clickable="true"
            :intern="false"
            :href="'https://www.messenger.com/t/despeelbergvzw'"
            :type="'info'"
          >
            Wij zijn ook bereikbaar op Facebook Messenger!
          </card>
          <card
            :title="'Bellen en sms\'en'"
            :clickable="true"
            :href="'tel:+32470031652'"
            :type="'info'"
            :intern="false"
          >
            Je kan ons bereiken op: 0498 97 56 95. <br />
            <b>Let op!</b> Al onze vrijwilligers studeren nog. Spreek gerust een
            boodschap in als je niemand kan bereiken.
          </card>
          <card :title="'Brieven'" :clickable="false">
            Je mag ons altijd een brief schrijven. Deze mag je posten op:
            Tomberg 21A, 8791 Beveren-Leie.
          </card>
        </block>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../components/NavBar";
import Slideshow from "../components/Slideshow";
import Block from "../components/Block";
import Card from "../components/Card";
import Footer from "../components/Footer";
// import Emphasis from '../components/Emphasis'

import blocks from "../modules/blocks";

export default {
  name: "Home",
  components: {
    NavBar,
    Slideshow,
    Block,
    Footer,
    Card,
    // Emphasis
  },
  data: () => {
    return {
      blocks: blocks,
    };
  },
};
</script>

<style scoped>
#main {
  position: relative;
  z-index: 8;
  padding: 45px 0;
  background: #ffffff;
  min-height: 100%;
}

.container {
  margin: auto;
  width: 70%;
}

.home {
  height: inherit;
  min-height: 100%;
}
</style>
