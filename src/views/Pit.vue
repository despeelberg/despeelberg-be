<template>
  <div class="pit">
    <page>
      <template v-slot:header>De PIT</template>

      <block blockTitle="Professioneel, Innovatief en Tof!" :class="'no-flex'">
        <p>
          Deze animatoren kunnen niet genoeg krijgen van het speelpleinwerk en
          zetten zich ook doorheen het jaar volle bak in voor het speelplein.
          Deze stuurgroep van een klein aantal super gedreven animatoren regelen
          alle praktische zaken die bij een speelpleinwerking komen kijken.
          Financiën, drank bestellen, contact met stad Waregem, flyers drukken…
          zijn maar enkele taken die op de agenda van de stuurgroep staan. Ook
          is de PIT het aanspreekpunt voor ouders! Heb je een vraag, voorstel of
          opmerking? De PIT staat voor je klaar!
        </p>
      </block>
      <emphasis :block="false" :type="'alert'"> Dit is een test </emphasis>
    </page>
  </div>
</template>

<script>
import Page from "../components/Page";
import Block from "../components/Block";
import Emphasis from "../components/Emphasis";
// import Emphasis from '../components/Emphasis'
export default {
  components: {
    Page,
    Block,
    Emphasis,
    // Emphasis
  },
};
</script>


<style>
.pit {
  height: inherit;
  min-height: inherit;
}
</style>