<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 
      h1 Síntesis
    .row.mt-4
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-s-1.svg', alt='Texto que describa la imagen').margin-0-auto.floating
      .col-12.col-lg-10.col-xl-11.align-self-center
        p A continuación, se presenta un mapa que representa esquemáticamente la información de este componente.
    figure.mt-4
      img(src='@/assets/template/tema-s-2.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
