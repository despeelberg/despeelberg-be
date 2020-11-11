<template>
  <div class="animatoren">
      <page>
          <template v-slot:header>Info voor animatoren</template>

          <block blockTitle="Hoe word ik animator bij De Speelberg?" :class="'no-flex'">
              <p>Animator worden bij ons is heel eenvoudig! Stuur ons een berichtje en versterk ons team!</p>
          </block>

          <block blockTitle="Moet ik een attest hebben om animator te worden?">
              <p>Nee, dat is niet nodig. Iedereen met of zonder attest kan animator worden.</p>
          </block>

          <block blockTitle="Ik word dit jaar 16, mag ik animator worden?">
              <p>Ja, je mag bij ons animator worden vanaf het jaar dat je 16 wordt. <br>
              vb. Je wordt 16 jaar in december, maar zou graag in juli al op het speelplein staan. Dat is helemaal geen probleem!</p>
          </block>

          <block blockTitle="Kan ik een animatorstage volgen op De Speelberg?">
              <p>Dat kan zeker! Laat ons iets weten, dan kunnen we samen iets regelen.</p>
          </block>
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
.animatoren{
  height: inherit;
  min-height: inherit;
}
</style>