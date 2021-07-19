<template>
  <header>
    <nav>
      <a
        href="/"
        class="nav-title"
      >Cambio de moneda</a>

      <ul>
        <li>
          <span>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1.25em"
              width="1.25em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                ry="2"
              ></rect>
              <line
                x1="16"
                y1="2"
                x2="16"
                y2="6"
              ></line>
              <line
                x1="8"
                y1="2"
                x2="8"
                y2="6"
              ></line>
              <line
                x1="3"
                y1="10"
                x2="21"
                y2="10"
              ></line>
            </svg>
          </span>
          <span>{{fecha}}</span>
        </li>
        <li>
          <a
            href="https://github.com/Brian-Aguilar/proyecto-exchange"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              version="1.1"
              viewBox="0 0 32 32"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 0.766-0.54 0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779-1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020-0.696 0.077-0.682 0.077-0.682 1.126 0.078 1.72 1.156 1.72 1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392-1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 0-1.226 0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 0.953 0.004 1.913 0.129 2.809 0.379 2.14-1.453 3.083-1.15 3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 0.348 0.761 1.030 0.761 2.076 0 1.5-0.015 2.709-0.015 3.079 0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666-10.645 0-6.195-5.023-11.219-11.219-11.219z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { fechaHoy } from "../assets/fechas"
export default {
  name: "Navbar",
  data() {
    return {
      fecha: "00/00/0000",
    }
  },
  created() {
    this.fecha = fechaHoy();
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/base.scss';
nav {
  height: auto;
  min-height: 10vh;
  padding: 1.25em;
  display: flex;
  flex-direction: column;
  align-items: center;

  a.nav-title {
    font-size: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    color: $primary;
    font-weight: bold;

    @media screen and (min-width: $m) {
      font-size: 2rem;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 1.25em;
    text-transform: uppercase;
    font-size: 1rem;

    a {
      color: $black;
    }

    li:nth-child(2n) {
      display: flex;
      align-items: center;
      gap: 3px;
    }

    @media screen and (min-width: $m) {
      font-size: 1.25rem;
    }
  }

  @media screen and (min-width: $sm) {
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>