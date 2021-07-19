<template>
  <main>
    <div class="contenido left">
      <card
        :dato="montoFrom"
        :focus="true"
        @actualizarMF="actualizarMontoFrom"
        @actualizarMoF="actualizarMonedaFrom"
      />
      <card
        :dato="montoTo"
        :focus="false"
        :result="montoResult"
        @actualizarMoF="actualizarMonedaTo"
      />
      <div class="change-button">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="2em"
          width="2em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
        </svg>
      </div>
    </div>
    <div class="contenido right">
      <div class="history">
        <header>
          <h3 class="title">Historial:</h3>
          <hr />
        </header>
        <div class="history--content">
          <span v-if="(historial.length === 0) && (cargandoH === false)">No hay datos</span>
          <span v-if="cargandoH">Cargando...</span>
          <transition-group name="card-list">
            <card-simple
              v-for="
            datoH
            in
            historial"
              :key="datoH[0]"
              :dato="datoH"
            />
          </transition-group>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Card from './Card.vue'
import CardSimple from './CardSimple.vue'

import { fechaUTC } from "../assets/fechas"

export default {
  name: "Content",
  data() {
    return {
      montoFrom: {
        monto: 0.00,
        moneda: ""
      },
      montoTo: {
        monto: 0.00,
        moneda: ""
      },
      montoResult: 0.00,
      historial: [],
      cargandoH: false
    }
  },
  components: { Card, CardSimple },
  methods: {
    actualizarMontoFrom(e) {
      this.montoFrom.monto = parseFloat(e.target.value).toFixed(2)
      this.montoTo.monto = Number((this.montoFrom.monto * this.montoResult).toFixed(2))
    },
    actualizarMonedaFrom(e) {
      this.montoFrom.moneda = e.target.value;
      if (this.montoTo.moneda !== "") {
        this.obtenerDatosFromTo()
      }
    },
    actualizarMontoTo(e) {
      this.montoTo.monto = parseFloat(e.target.value).toFixed(2);
    },
    actualizarMonedaTo(e) {
      this.montoTo.moneda = e.target.value;
      if (this.montoFrom.moneda !== "") {
        this.obtenerDatosFromTo()
      }
    },
    obtenerDatosFromTo() {
      console.log("Llamando a la api...")
      const url = `https://api.exchangerate.host/convert?from=${this.montoFrom.moneda}&to=${this.montoTo.moneda}`
      fetch(url).then(res => res.json()).then(data => {
        this.montoResult = Math.abs(parseFloat(data.result), 2);
        this.montoTo.monto = Number((this.montoFrom.monto * this.montoResult).toFixed(2));
        this.obtenerHistorial();
      })
    },
    obtenerHistorial() {
      this.cargandoH = true;
      const fecha = fechaUTC();
      const url = `https://api.exchangerate.host/timeseries?start_date=${fecha.start}&end_date=${fecha.end}&base=${this.montoFrom.moneda}&symbols=${this.montoTo.moneda}`;
      fetch(url).then(res => res.json()).then(data => {
        this.historial = Object.entries(data.rates);
        this.cargandoH = false;
      });
    }
  },
}

</script>

<style lang="scss" scope>
@import '../assets/base.scss';
main {
  height: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;

  .contenido {
    flex: 1 1 auto;
    width: 100%;
    padding: 1.25em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    position: relative;

    &.left {
      .change-button {
        box-sizing: content-box;
        position: absolute;
        width: 80px;
        height: 80px;
        background-color: $white;
        border: 1.25em solid $background;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;

        svg {
          transform: rotate(45deg);
          stroke: $primary;
        }
      }
    }

    &.right {
      position: relative;
      justify-content: flex-start;
      padding: 2em 2.15em;

      .history {
        font-size: 1.75rem;

        .title {
          margin: 0;
        }

        hr {
          margin-bottom: 1.25em;
        }
      }

      .history--content {
        display: flex;
        flex-direction: column;
        gap: 1.25em;

        & > span {
          text-align: center;
          font-size: 1.75rem;
          text-transform: uppercase;
          font-weight: bold;
        }

        .card-list-enter-active,
        .card-list-leave-active {
          transition: all 1s ease;
        }
        .card-list-enter-from,
        .card-list-leave-to {
          opacity: 0;
          transform: translateY(30px);
        }
      }

      @media screen and (min-width: $m) {
        &::after {
          content: '';
          width: 0;
          height: 50%;
          position: absolute;
          top: 50%;
          left: 0;
          border: 3px dashed $black;
          opacity: 0.1;
          transform: translateY(-50%);
        }
      }
    }
  }

  @media screen and (min-width: $m) {
    flex-direction: row;

    .contenido {
      width: 50%;
    }
  }
}
</style>