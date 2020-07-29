<template>
  <div class="error">
      <page>
          <template v-slot:header>Pagina niet gevonden</template>

          <block blockTitle="Oeps!" :class="'no-flex'">
              <p>Ik heb overal gezocht, maar kan deze pagina niet vinden!</p>
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