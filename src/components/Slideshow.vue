<template>
  <div id="slideshow">
    <div class="background">
      <div id="info-wrap">
        <div id="info">
          <div class="vakantieInfo firstvakantie">
            <h1>Paasvakantie 2024</h1>
            <h2>8 - 12 april</h2>
          </div>

          <div class="vakantieInfo">
            <h1>Zomervakantie 2024</h1>
            <h2>1 - 12 juli</h2>
            <h2>12 - 28 augustus</h2>
          </div>

          <!-- <a href="https://inschrijven.despeelberg.be" class="button">Inschrijven</a> -->
        </div>
      </div>
    </div>

    <!-- <div class="columns">
      <div class="column">
        <div class="column-row">
             <div class="logo">
                    <img src="@/assets/logo_circle.png" alt="Speelplein De Speelberg vzw" class="logo-img">
                    <h2 class="logo-name">Speelplein de Speelberg vzw</h2>
                </div>
        </div>
        <div class="column-row">
          <div class="welcome">
            <h3 div="welcome">Paasvakantie 2021</h3>
            <h4>12 - 16 april</h4>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="socials">
          <a
            href="https://www.facebook.com/despeelbergvzw/"
            target="_blank"
            class="socials-link"
          >
            <fa :icon="['fab', 'facebook-f']"></fa>
          </a>
          <a
            href="https://www.instagram.com/speelpleindespeelberg/"
            target="_blank"
            class="socials-link"
          >
            <fa :icon="['fab', 'instagram']"></fa>
          </a>
          <a
            href="https://www.messenger.com/t/despeelbergvzw"
            target="_blank"
            class="socials-link"
          >
            <fa :icon="['fab', 'facebook-messenger']"></fa>
          </a>
          <a href="mailto:info@despeelberg.be" class="socials-link">
            <fa :icon="['fas', 'envelope']"></fa>
          </a>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "slideshow",
};
</script>

<style scoped>
#slideshow {
  width: 100%;
  height: 80vh;
  transition: 0.5s ease-in;
  position: fixed;
  z-index: -1;
  top: 0;
  background: url("../assets/banner_2024.jpg") center center no-repeat;
  background-size: cover;
  /* padding-bottom: 56.25%; */
}

.background {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
#info-wrap {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
}

#info {
  width: 80%;
  margin: auto;
  color: #ffffff;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
}

h1,
h2,
h3 {
  margin: 10px 0;
}

h1 {
  font-size: 3.5em;
}

h2 {
  font-size: 2.5em;
}

h3 {
  font-size: 1.5em;
}

.button {
  padding: 15px;
  background: #1a6ac1;
  margin: 25px 0;
  display: block;
  width: 470px;
  text-align: center;
  border-radius: 5px;
}

.vakantieInfo {
  float: left;
  margin-top: 50px;
}

.firstvakantie {
  padding-right: 150px;
}

@media (max-width: 700px) {
  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.5em;
  }

  .button {
    width: 100%;
  }
}

@media (max-width: 1450px) {
  #info-wrap {
    height: 100%;
  }

  .firstvakantie {
    padding-right: 0;
  }

  .vakantieInfo {
    float: none;
  }
}
</style>