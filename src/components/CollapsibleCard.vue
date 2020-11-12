<template>
  <div class="collapsible-card">
    <!-- cc from here -->
    <div aria-role="button" @click="this.toggle" class="cc-title-wrap">
      <h3 class="cc-title">
        <slot :name="'title'"></slot>
      </h3>
      <button class="cc-toggle" :class="{'cc-toggle-open': this.open}" name="Open question">
        <fa :icon="['fas', 'angle-left']"></fa>
      </button>
    </div>
    <div class="cc-content" :class="{'cc-content-open': this.open}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollapsibleCard",
  data: () => {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
.collapsible-card {
  padding: 0 15px;
  background: rgba(239, 239, 239, 0.7);
  box-shadow: 5px 5px 2px #ececec;
  transition: 0.2s linear;
  width: 100%;
  margin: 25px 0;
}

.cc-title-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.cc-title {
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  /* padding: 25px 0; */
}

.cc-toggle {
  background: none;
  color: #1a6ac1;
  border: none;
  padding: 25px;
  font-size: 28px;
  transform: rotateZ(270deg);
  cursor: pointer;
  transition: 0.1s linear;
}

.cc-toggle-open {
  transform: rotateZ(90deg);
}

.cc-content {
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  transition: 0.1s linear;
  max-height: 0;
  overflow: hidden;
}

.cc-content-open {
  max-height: 100%;
  padding: 0 0 15px 0;
}
</style>