<template>
    <div class="block">
        <h3 class="block-title">{{ blockTitle }}</h3>
        <div class="slot">
          <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
  name: 'block',
  props: {
    'blockTitle': String
  }
}
</script>

<style scoped>
.link {
    text-decoration: none;
}
.block {
    margin-bottom: 25px;
    color: #333333;
}

.block-title {
    font-family: 'Roboto', Avenir, Arial, Helvetica, sans-serif;
    margin: 5px 0;
    font-size: 26px;
    color: '#696969';
}

.slot {
  display: flex;
  justify-content: space-between;
  align-items: top;
  color: #333;
}

.no-flex .slot {
  display: block;
  color: #333333;
}

@media (max-width: 640px) {
  .slot {
    display: block;
  }
}
</style>