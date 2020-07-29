<template>
  <span id="emphasis" :class="[type]" v-if="!block">
      <slot></slot>
  </span>
  <div class="block" :class="[type]" v-else>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "emphasis",
    props: {
        type: String,
        block: Boolean
    }
}
</script>

<style scoped>
.info {
    color: #1a6ac1;
}
.alert {
    color: #ff6403;
}
.warning {
    color: #ef1303;
}

.block {
    color: #000000;
    padding: 10px;
    width: 100%;
    font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif;
}

.block.info {
    background:#1a6ac1;
    color: #ffffff;
}
.block.alert {
    background:#ff6403;
}
.block.warning {
    background:#ef1303;
}
</style>