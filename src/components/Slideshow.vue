<template>
  <div id="slideshow">
      <div class="background"></div>
        <div class="columns">
        <div class="column">
            <div class="column-row">
                <div class="logo">
                    <img src="@/assets/logo_circle.png" alt="Speelplein De Speelberg vzw" class="logo-img">
                    <h2 class="logo-name">Speelplein de Speelberg vzw</h2>
                </div>
            </div>
            <div class="column-row">
                <div class="welcome">
                    <h3 div="welcome"></h3>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="socials">
                    <a href="https://www.facebook.com/despeelbergvzw/" target="_blank" class="socials-link">
                        <fa :icon="['fab', 'facebook-f']"></fa>
                    </a>
                    <a href="https://www.instagram.com/speelpleindespeelberg/" target="_blank" class="socials-link">
                        <fa :icon="['fab', 'instagram']"></fa>
                    </a>
                    <a href="https://www.messenger.com/t/despeelbergvzw" target="_blank" class="socials-link">
                        <fa :icon="['fab', 'facebook-messenger']"></fa>
                    </a>
                    <a href="mailto:info@despeelberg.be" class="socials-link">
                        <fa :icon="['fas', 'envelope']"></fa>
                    </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'slideshow'
}
</script>

<style scoped>
#slideshow {
    width: 100%;
    height: 80vh;
    transition: 0.5s ease-in;
    position: fixed;
    top: 0;
    background: url("../assets/banner_2021.jpg") center center no-repeat;
    background-size: cover;
    /* padding-bottom: 56.25%; */
}

.background {
    background-color: rgba(26, 106, 193, 0.35);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
} 

.columns {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: stretch;
    position: absolute;
    top: 0;
}
.column {
    flex: 1;
    padding: 35px 75px;
}

.column-row {
    height: 50%;
}

.logo {
    display: flex;
    align-items: center;
}
.logo-img {
    height: 110px;
    width: auto;
    margin-right: 25px;
}
.logo-name {
    color: #fff;
    text-transform: uppercase;
    font-family: 'Sigmar One', Avenir, Arial, Helvetica, sans-serif;
    font-size: 26px;
    font-weight: 300;
}
.welcome {
    color: #ffffff;
    font-family: 'Sigmar One', Avenir, Arial, Helvetica, sans-serif;
    font-size: 28px;
}
.socials {
    width: 100%;
    text-align: right;
}
.socials-link {
    margin: 8px;
    color: #ffffff;
    font-size: 20px;
}
</style>