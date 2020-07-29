<template>
  <div class="visie">
      <page>
          <template v-slot:header>Onze visie</template>

          <block blockTitle="Missie" :class="'no-flex'">
              <p>We willen elk kind een echt vakantiegevoel bezorgen door hen tot intens spelen te laten komen: niet zomaar spelen, maar zo hard spelen dat je alles rond je vergeet. Het einddoel van onze werking is spelen op zich. Het aanbod wordt uitgewerkt en uitgevoerd voor en door jongeren. <br><br>We leggen een klemtoon op laagdrempeligheid, vrijheid en avontuurlijk spelen. Vuil zijn mag!</p>
          </block>

          <block blockTitle="Speelkansen" :class="'no-flex'">
              <p>Intens spelen bereiken we door het aanbieden van zo veel mogelijk speelkansen (uit animatoren, materiaal, terrein en andere kinderen) en het voorzien van zowel keuzevrijheid als variatie in het aanbod, door het aanbieden van een open speelaanbod. <br><br>Standaard kunnen alle kinderen deelnemen aan alle activiteiten, maar we voorzien ook activiteiten met net dat extra beetje avontuur voor tieners, en activiteiten met extra comfort voor kleuters. <br><br>We willen een zo toegankelijk mogelijke werking zijn op alle vlak, en streven daarom ook zo laag mogelijke prijzen na. We willen er zijn voor alle kinderen en jongeren tussen 3 en 15 jaar, ook kinderen met een beperking, maar zijn daarbij beperkt door de draagkracht van onze ploeg vrijwilligers.</p>
          </block>

          <block blockTitle="Speelpleinploeg" :class="'no-flex'">
              <p>Animatoren zijn vrijwilligers, en door hen bereiken we onze missie. Voor hun inzet krijgen ze een vrijwilligersvergoeding, maar vooral waardering. We zetten in op een goede sfeer door het organiseren van leidingsactiviteiten, een bedankingsweekend, en werken aan een jaarwerking. Gelijkwaardigheid, openheid en respect zijn waarden die we belangrijk vinden in onze groep. <br><br>We willen een welkome thuis zijn voor nieuwe animatoren. Van nieuwe animatoren verwachten we dat ze een hart voor kinderen hebben en onze missie willen helpen verwezenlijken. Een opleiding of ervaring is niet nodig, maar we zijn wel overtuigd van het nut van vorming om onze animatoren naar een hoger niveau te tillen. <br><br>Hoewel de werking enkel tijdens de vakanties open is, zijn we het hele jaar door actief: voorbereiden, plannen, actief zijn op lokale evenementen, en werken aan een sterke groep.</p>
          </block>

          <block blockTitle="Organisatorische onderbouw" :class="'no-flex'">
              <p>De eindverantwoordelijke van onze werking is de stuurgroep: een groep gedreven vrijwilligers die beleid maken, plannen en organiseren om onze visie te realiseren</p>
          </block>

          <block blockTitle="Externe relaties" :class="'no-flex'">
              <p>We zijn een lokale werking, en willen ons ook lokaal wortelen. Daarom willen we goede contacten onderhouden met lokale verenigingen. We werken mee aan lokaal jeugdbeleid door vertegenwoordiging in de Waregemse jeugdraad. <br><br>De Vlaamse Dienst Speelpleinwerk is ons eerste aanspreekpunt als we vragen hebben over speelpleinwerk. We rekenen op Stad Waregem en de jeugddienst voor ondersteuning in de vorm van infrastructuur, terrein en subsidies. <br><br>We werken aan professionele en speelse communicatie om onze werking en visie lokaal bekend te maken.</p>
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