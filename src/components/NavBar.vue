<template>
  <!--  v-scroll="handleScroll" -->
  <nav id="navbar" :class="[{ top: topOfPage }, { topOfPage: topOfPage }]">
    <div class="container">
      <div class="nav-wrap">
        <div class="res-wrap">
          <a href="/">
          <div class="logo-div">
             <img
              class="logo"
              src="@/assets/logo_circle.png"
              alt="Logo Speelplein De Speelberg vzw"
              srcset=""
            />
          <h2 class="logo-name">Speelplein de Speelberg vzw</h2>
          </div>
          
          </a>
          <div class="menu-btn-wrap">
            <button name="Menu button" class="menu-btn" v-on:click="toggleMenu()">
              <fa :icon="['fas', 'bars']"></fa>
            </button>
          </div>
        </div>

        <div class="main-nav" id="nav" :class="{ open: menuOpen }">
          <a href="#info" class="link"> INFO </a>
          <a href="#kalender" class="link"> KALENDER </a>
          <a href="#fotos" class="link"> FOTO'S </a>
          <a href="#contact" class="link"> CONTACT </a>
          <div class="socials">
            <a
              href="https://www.facebook.com/despeelbergvzw"
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
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      menuOpen: false,
    };
  },
  props: {
    topOfPage: Boolean,
  },
  methods: {
    handleScroll: (e, element) => {
      if (!this.topOfPage) {
        if (e) {
          if (window.innerHeight - window.scrollY < window.scrollY * 0.5) {
            element.setAttribute("class", "top");
          } else {
            element.removeAttribute("class");
          }
        }
      }
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>


#navbar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 0;
  margin-top: 80vh;
  background: #ffffff;
  z-index: 10;
}

#navbar {
  box-shadow: 0 3px 13px 0 rgb(52, 52, 52, 0.4);
}

#navbar.topOfPage {
  box-shadow: 0 3px 13px 0 rgb(52, 52, 52, 0.4);
  margin-top: 0 !important;
}

.res-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
}
.nav-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo-div {
    display: flex;
    align-items: center;
}

.logo {
  width: 90px;
  height: auto;
  margin-right: 1.5em;
}

.logo-name {
    text-transform: uppercase;
    font-family: 'Roboto Condensed', Avenir, Arial, Helvetica, sans-serif;
    font-size: 26px;
    font-weight: 300;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  transition: 0.1s linear;
}
.link {
  color: #333;
  text-decoration: none;
  margin: 0 15px;
  font-family: "Roboto Condensed", Avenir, Arial, Helvetica, sans-serif;
  text-align: center;
  transition: 0.2s linear;
  font-size: 18px;
}
.link:hover,
.socials-link:hover {
  color: #1a6ac1;
}
.socials-link {
  font-size: 18px;
  margin: 5px;
  color: #2c3e50;
  transition: 0.2s linear;
}

.menu-btn-wrap {
  display: none;
}

.menu-btn {
  background: none;
  border: none;
  color: #333;
  font-size: 18px;
}

@media (max-width: 700px) {
  .menu-btn-wrap {
    display: block;
  }

  .nav-wrap {
    /* flex-direction: column; */
    display: block;
  }

  .main-nav {
    flex-direction: column;
    display: none;
  }

  .main-nav.open {
    display: flex;
  }

  .link,
  .socials-link {
    margin: 5px 0;
  }

  .socials {
    margin: 5px 0;
  }

  .socials-link {
    margin: 10px 5px;
  }

  .logo {
    justify-content: start;
  }
}
</style>