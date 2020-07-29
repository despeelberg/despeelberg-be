<template>
  <div class="corona">
      <page>
          <template v-slot:header>Maatregelen i.v.m. het coronavirus</template>

          <block blockTitle="Hoe zal de speelpleinwerking eruitzien?" :class="'no-flex'">
              <emphasis :block="true" :type="'info'"><h2>2 bubbels</h2></emphasis>
              <p>De kinderen zullen spelen in 2 gescheiden ‘bubbels’. Iedere bubbel bevat maximum 50 personen (max. 45  kinderen onder begeleiding van  5 animatoren). Deze bubbel blijft 1 week ‘intact’, concreet betekent dit dat je kind met max. 49 andere personen in contact zal komen gedurende de hele week.</p>
                <br>
              <emphasis :block="true" :type="'info'"><h2>2 locaties</h2></emphasis>
              <p>Elke bubbel bevindt zich op een ander domein. De eerste bubbel gaat door op het speelterrein aan Tomberg 21A. De tweede bubbel gaat door in de Stedelijke basisschool, Koning Albertstraat 41.</p>
          </block>

          <block blockTitle="Wie kan naar het speelplein komen?" :class="'no-flex'">
              <emphasis :block="true" :type="'info'"><h2>3 - 12 jaar</h2></emphasis>
              <p>Kinderen vanaf 3 jaar en jonger dan 12 jaar kunnen naar het speelplein komen. 
                In welke bubbel het kind zal spelen, is afhankelijk van hun leeftijd. Er zal ook rekening gehouden worden met broers en zussen.</p>
                <br>
              <emphasis :block="true" :type="'info'"><h2>Minstens 3 dagen per week</h2></emphasis>
              <p>Kinderen die minstens 3 dagen in de week naar het speelplein komen, zullen voorrang krijgen op kinderen die minder dan 3 dagen komen. (Er zal namelijk met een inschrijfsysteem gewerkt worden, verdere info volgt.) </p>
              <br>
              <!-- <emphasis :block="true" :type="'info'"><h2>Geen tieners</h2></emphasis>
              <p>Helaas kunnen we geen 12+’ers ontvangen op ons speelplein. Voor hen zal zal er dus GEEN plaatsje zijn op het speelplein, maar we vergeten ze niet! Indien het mogelijk is, dan organiseren we enkele corona-proof activiteiten op een externe locatie en halen we ons mooiste mondmasker uit de kast! De andere Waregemse speelpleinen voorzien wel een tienerwerking!</p> -->
          </block>

          <!-- <block blockTitle="Wanneer is er speelplein?" :class="'no-flex'">
              <emphasis :block="true" :type="'info'"><h2>Maandag 6 juli</h2></emphasis>
              <p>Het speelplein zal open zijn vanaf maandag 6 juli tot en met vrijdag 17 juli. En van maandag 17 augustus tot en met vrijdag 28 augustus. (Het speelplein zal dus niet op woensdag 1 juli open gaan.)</p>
                <br>
              <emphasis :block="true" :type="'info'"><h2>Hele dag of enkel in de namiddag</h2></emphasis>
              <p>Kinderen kunnen de hele dag ofwel enkel in de namiddag komen. Naar huis gaan over de middag, of enkel in de voormiddag komen, is dus geen optie</p>
          </block> -->
          
          <!-- <block blockTitle="Wanneer weten we meer..." :class="'no-flex'">
              <emphasis :block="true" :type="'info'"><h2>...over het inschrijfsysteem?</h2></emphasis>
              <p>Je kan je kinderen inschrijven tot en met 25 juni op <a href="https://inschrijven.despeelberg.be" target="_blank" class="link">inschrijven.despeelberg.be</a></p>
                <br>
              <emphasis :block="true" :type="'info'"><h2>...over hygiënische maatregelen en benodigdheden?</h2></emphasis>
              <p>We zullen de nodige aankopen doen om de hygiëne te handhaven. Verdere info volgt eind juni. <br>
                ‘Binnen je bubbel kan je voluit spelen. je hoeft geen 1.5m afstand te houden en geen mondmasker te dragen.’ - VDS
                </p>
                <br>
                <emphasis :block="true" :type="'info'"><h2>...over concrete praktische zaken?</h2></emphasis>
                <p>Eind juni zal hier meer onformatie over beschikbaar zijn.</p>
          </block> -->

          <!-- <block blockTitle="Blokkende leiding" :class="'no-flex'">
              <p>Onze werking draait volledig op studenten, studenten die hard aan het blokken zijn voor de examens die op de loer liggen. Het organiseren van een corona-proof-werking vergt veel tijd, onze corona-aanpak is uitgewerkt en de grootste prioriteiten worden aangepakt. In de laatste week van juni (na onze examens), werken we het plan tot in de puntjes uit! Pas dan volgt verdere informatie. Hopelijk hebben jullie begrip voor onze situatie en kunnen jullie met bovenstaande info je zomer reeds inplannen! </p>
          </block> -->

          <block blockTitle="Goesting? Zeker!" :class="'no-flex'">
              <p>Wij hebben er zin in en gaan ons uiterste best doen om van 2020 een zalige en veilige zomer te maken!</p>
          </block>

      </page>
  </div>
</template>

<script>
import Page from '../components/Page'
import Block from '../components/Block'
import Emphasis from '../components/Emphasis'
export default {
  components: {
    Page,
    Block,
    Emphasis
  }
}
</script>