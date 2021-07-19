<template>
  <div class="card--simple">
    <div class="left">
      <h4>{{ Object.entries(dato[1])[0][0] }}</h4>
      <span>{{ dato[0] }}</span>
    </div>
    <div class="right">
      <!-- {{ dato[1][0] }} -->
      {{ Number(Object.entries(dato[1])[0][1]).toFixed(2) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSimple",
  props: ["dato"]
}
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';
.card--simple {
  width: 100%;
  padding: 1.25em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;
  border-radius: 0.5em;
  box-shadow: $shadow;

  h4 {
    margin: 0;
    color: $primary;
    font-size: 1.5rem;
  }

  .right {
    font-size: 1.75rem;
    font-weight: bold;
  }
}
</style>