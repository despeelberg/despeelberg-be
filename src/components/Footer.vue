<template>
  <div id="footer" class="ft">
    <div class="column">
        <img src="@/assets/logo.png" alt="" srcset="">
    </div>
    <div class="column">
        <h4>SPEELPLEIN DE SPEELBERG VZW</h4>
        <div id="address">
            Tomberg 21A <br>
            8791 Beveren-Leie
        </div>
    </div>
    <div class="column">
        <h4>CONTACT</h4>
        <p>
            <a href="tel:+32470031652" class="link">+324 70 03 16 52</a>
            <a href="mailto:info@despeelberg.be" class="link">info@despeelberg.be</a>
            <br>
<!--             <a href="https://www.messenger.com/t/despeelbergvzw" class="link" target="_blank">Facebook</a>
 -->        </p>
    </div>
    <div class="column">
        <h4>NUTTIGE LINKS</h4>
        <a href="http://www.wordanimator.be/" class="link" target="_blank">Word animator!</a>
        <a href="https://www.waregem.be/" class="link" target="_blank">Stad Waregem</a>
        <a href="https://www.chiro-leieland.be/" class="link" target="_blank">Chiro Leieland</a>
        <a href="https://www.speelplein.net/" class="link" target="_blank">Vlaamse Dienst Speelpleinwerk</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ft"
}
</script>

<style scoped>

#footer{
    flex-shrink: 0;
}

.ft {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 15px 20%;
    background: #1a6ac1;
    width: 100%;
    z-index: 8;
    color: #ffffff;
    font-family: 'Roboto', Avenir, Arial, Helvetica, sans-serif;

}
.link {
    color: #ffffff;
    display: block;
    font-family: 'Roboto', Avenir, Arial, Helvetica, sans-serif;

}

.link:hover{
    text-decoration: underline;

}
h4  {
    margin-bottom: 5px;
    font-size: 1.1rem;
    font-weight: normal;
    font-family: 'Roboto Condensed', Avenir, Arial, Helvetica, sans-serif;
}
.column {
    flex: 1 1 auto;
}
.column img {
    height: 90px;
    width: auto;
}

#address{
        color: #ffffff;
    font-family: 'Roboto', Avenir, Arial, Helvetica, sans-serif;
}

@media (max-width: 1000px) {
    .column img {
        display: none;
    }

    .column {
        flex: auto;
    }

    .ft {
        flex-direction: column;
        /* padding: 15px 50%; */
    }
}
</style>