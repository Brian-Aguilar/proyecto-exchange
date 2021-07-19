<template>
  <select
    name="paises"
    @change="$emit('selectValue', $event)"
  >
    <option
      selected
      disabled
    >Seleccionar: </option>
    <option
      v-for="dato in datos"
      :key="dato.code"
      :value="dato.code"
    >
      {{dato.code}}
    </option>
  </select>
</template>

<script>
import simbolos from "../assets/simbolos"

export default {
  name: "SelectS",
  data() {
    return {
      datos: simbolos
    }
  },
  emits: ["selectValue"]
}
</script>

<style lang="scss" scoped>
select {
  font-size: 1.75rem;
  background-color: transparent;
  border: 0px;
  cursor: pointer;

  option {
    text-align: center;
  }
}
</style>