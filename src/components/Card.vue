<template>
  <div class="card">
    <div class="card-monto">
      <input
        type="number"
        inputmode="numeric"
        @change="$emit('actualizarMF', $event)"
        :value="dato.monto"
        class="monto"
        :autofocus="focus"
        pattern="[0-9]+"
        min="0"
        step="0.01"
        v-if="focus"
      >
      <span
        class="monto"
        v-if="!focus"
      >{{montoConvertido}}</span>

    </div>
    <div class="card-select">
      <select-s @selectValue="$emit('actualizarMoF', $event)" />
    </div>
  </div>
</template>

<script>
import SelectS from './SelectS.vue'
export default {
  components: { SelectS },
  name: "Card",
  props: ["dato", "focus", "result"],
  emits: ["actualizarMF", "actualizarMoF"],
  computed: {
    montoConvertido() {
      return Math.abs(parseFloat(this.dato.monto), 2)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';
.card {
  width: 100%;
  min-height: 300px;
  background-color: $white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 0.75em;
  box-shadow: $shadow;

  .card-monto {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 1.9rem;

    span:nth-child(1) {
      font-weight: bold;
    }

    .monto {
      font-size: 1.75em;
      width: 200px;
      display: inline-block;
      border: 0px;
      padding: 0px;
      appearance: none;
      user-select: none;
      outline: none;
      text-align: center;

      &:disabled {
        background-color: transparent;
        color: $black;
        user-select: none;
        pointer-events: none;
      }
    }
  }

  @media screen and (min-width: $m) {
    flex-direction: row;
  }
}
</style>