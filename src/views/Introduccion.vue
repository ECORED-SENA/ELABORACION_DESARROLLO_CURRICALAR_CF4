<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mt-5
      p ¿En qué consiste la Planeación Pedagógica en el proceso de Desarrollo Curricular?
      p.mt-3 En el siguiente recurso, lo invitamos a revisar la introducción a este proceso.
      figure.mt-4
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .col-12.mt-4.p-5.bg-amarillo-claro   
        .row
          .col-12.col-lg-8.align-self-center
            p Realizar una planeación pedagógica nos invita a pensar en las prioridades que se deben atender en el proceso formativo, por ello, lo invitamos a reflexionar en torno a la lectura que encuentra en el enlace:
            a.anexo.mb-4.mb-lg-0.mt-4(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[strong Enlace web.] Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
          .col-4.d-none.d-lg-flex
            figure
              img(src='@/assets/template/tema-0-1.svg', alt='Texto que describa la imagen').w-75.margin-0-auto
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
