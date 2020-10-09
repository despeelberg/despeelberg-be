<template>
  <div class="About">
    <page>
      <template v-slot:header>Info voor ouders</template>
      <block blockTitle="Waar ligt het speelplein?" :class="'no-flex'">
        <p>Onze speelpleinwerking kan je vinden op Tomberg 21A, 8791 Beveren-Leie. We delen de gebouwen en terreinen met <a href="https://www.chiro-leieland.be/" target="_blank" class="link">Chiro Leieland</a></p>
        <div style="width: 100%"><iframe width="100%" height="400" src="https://maps.google.com/maps?width=100%&height=400&hl=nl&q=Tomberg%2021a%2C%208791%20Beveren-Leie+(Speelplein%20De%20Speelberg)&ie=UTF8&t=&z=18&iwloc=B&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div>
      </block>

      <block blockTitle="Voor wie is het speelplein?">
        <p>
        Alle kinderen tussen 3 en 15 jaar zijn welkom op De Speelberg.
        </p>
      </block>

      <block blockTitle="Hoe ziet een dag eruit op het speelplein?" :class="'no-flex'">
        <p></p>
        <p>
          <b>7:45 - 9:30</b> Onze poort staat open voor iedereen die wil spelen! De poort wordt om 9:30 gesloten en kan je niet meer binnen. <br>
          <b>9:30 - 12:00</b> Er worden verschillende activiteiten georganiseerd door een enthousiaste groep animatoren. Je kan zelf kiezen waar je meespeelt! <br>
          <b>12:00 - 13:00</b> Over de middag kan je jouw boterhammen opeten. Er wordt een drankje aangeboden (cola, limonade of water). <br>
          <b>13:00 - 13:45</b> Onze poort staat weer open voor iedereen die in de namiddag wil komen spelen! <br>
          <b>13:45 - 17:30</b> Een hele namiddag spelen! Om 15:30 is er het vieruurtje, waar je een koekje (zelf mee te brengen) kan eten en een drankje krijgt. Om 17:30 worden alle kinderen tegelijk afgehaald aan de poort.
        </p>

      </block>

      <block blockTitle="Hoeveel kost een dag op het speelplein?" :class="'no-flex'">
        <p>
          <b>Voormiddag</b> €1 <br>
          <b>Middag</b> €1 (inclusief drankje) <br>
          <b>Namiddag</b> €2 (inclusief drankje) <br>
          <br>
          <b>Hele dag</b> €4
        </p>
      </block>

      <!-- <block blockTitle="Moet ik mijn kind op voorhand inschrijven?" :class="'no-flex'">
        <p>Ja, dit jaar worden kinderen uitzonderlijk op voorhand ingeschreven. Dit kan vanaf <time datetime="2020-06-21">21 juni</time>.</p>
      </block> -->
    </page>
  </div>
</template>

<script>
import Page from '../components/Page'
import Block from '../components/Block'
// import Emphasis from '../components/Emphasis'
export default {
  components: {
    Page,
    Block,
    // Emphasis
  }
}
</script>

<style>

</style>