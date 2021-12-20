<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Concepto
    .row
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 1
          p.mt-1.fst-italic Planear  
        .h4.mt-4.text-center ¿Qué significa planear?
        figure.mt-4
          img(src='@/assets/template/tema-1-1.png', alt='Texto que describa la imagen')
    .row.mt-4
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-2.svg', alt='Texto que describa la imagen').margin-0-auto.floating
      .col-12.col-lg-10.col-xl-11.align-self-center
        p Para el Servicio Nacional de Aprendizaje – SENA la Planeación Pedagógica orientará a los equipos de desarrollo curricular para que se diseñe un plan en torno a los elementos conceptuales, procedimentales y prácticos, necesarios en la mediación pedagógica y la transposición didáctica de la formación.
    .row.mt-4.zoom-in
      p La Planeación Pedagógica se construye a partir de los intereses de contexto y de la propuesta antropológica que toda entidad educativa desea brindar a una comunidad, definiendo así la identidad pedagógica de cada establecimiento educativo y organización de actividades de aprendizaje que deben ejecutarse durante el proceso de formación.  Determina las exigencias de ambientes, recursos, talento humano, estrategias, técnicas, para la ejecución de la formación.
      .col-12.col-lg-8
        p Su estructura atiende a la formulación de actividades de aprendizaje a lo largo del proceso de formación orientado por el instructor, las cuales deben promover:
        ul.lista-ul.mt-4
          li 
            i.fas.fa-angle-right
            | La autonomía
          li 
            i.fas.fa-angle-right
            | El pensamiento crítico
          li 
            i.fas.fa-angle-right
            | La investigación
          li 
            i.fas.fa-angle-right
            | La gestión de la información
          li 
            i.fas.fa-angle-right
            | El uso de las TIC
          li 
            i.fas.fa-angle-right
            | El trabajo colaborativo, a partir de las actividades de aprendizaje formuladas
      .col-4.offset-4.offset-lg-0.mt-3.mt-lg-0.align-self-center
        figure
          img(src='@/assets/template/tema-1-3.png', alt='Texto que describa la imagen')
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-primario.p-4.mb-4.bg-naranja-claro
          p Es decir, una estructuración que implique una transformación centrada en el Desarrollo Humano Integral mediante procesos de aprendizaje. 
    .row.mt-4
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 2
          p.mt-1.fst-italic Variables pedagógicas de la Planeación pedagógica
    .row.mt-4
      .col-8.col-lg-6.offset-2.offset-lg-3.text-center
        .h4 ¿Cuáles son las variables pedagógicas a considerar en la planeación pedagógica?
    LineaTiempoC.color-primario(text-small).mt-4.py-5.fondo-img-1
      .row.position-relative(titulo="")
        .col-4.col-md-3.col-lg-2.offset-2.offset-lg-1.bg-naranja.rounded-15.text-white.px-4.py-2.text-center
          p Fase del proyecto
        .col-12
          .row
            figure.mt-4.col-4.col-md-3.col-lg-2.offset-2.offset-lg-1.d-flex.justify-content-center
              img(src='@/assets/template/tema-1-4.svg', alt='Texto que describa la imagen').w-75


      .row(titulo="")
        .col-4.col-md-3.col-lg-2.offset-3.bg-naranja.rounded-15.text-white.px-4.py-2.text-center
          p Actividad del Proyecto
        .col-12
          .row
            figure.mt-4.col-4.col-md-3.col-lg-2.offset-3.d-flex.justify-content-center
              img(src='@/assets/template/tema-1-5.svg', alt='Texto que describa la imagen').w-75

      .row(titulo="")
        .col-4.col-md-3.col-lg-2.offset-3.bg-naranja.rounded-15.text-white.px-4.py-2.text-center
          p Competencia
        .col-12
          .row
            figure.mt-4.col-4.col-md-3.col-lg-2.offset-3.d-flex.justify-content-center
              img(src='@/assets/template/tema-1-6.svg', alt='Texto que describa la imagen').w-75
      .row(titulo="")
        .col-4.col-md-3.col-lg-2.offset-3.bg-naranja.rounded-15.text-white.px-4.py-2.text-center
          p Duración actividades de aprendizaje
        .col-12
          .row
            figure.mt-4.col-4.col-md-3.col-lg-2.offset-3.d-flex.justify-content-center
              img(src='@/assets/template/tema-1-7.svg', alt='Texto que describa la imagen').w-75
      .row(titulo="")
        .col-4.col-md-3.col-lg-2.offset-3.bg-naranja.rounded-15.text-white.px-4.py-2.text-center
          p Actividades de aprendizaje a desarrollar
        .col-12
          .row
            figure.mt-4.col-4.col-md-3.col-lg-2.offset-3.d-flex.justify-content-center
              img(src='@/assets/template/tema-1-8.svg', alt='Texto que describa la imagen').w-75
      .row(titulo="")
        .col-4.col-md-3.col-lg-2.offset-3.bg-naranja.rounded-15.text-white.px-4.py-2.text-center
          p Resultados de Aprendizaje
        .col-12
          .row
            figure.mt-4.col-4.col-md-3.col-lg-2.offset-3.d-flex.justify-content-center
              img(src='@/assets/template/tema-1-9.svg', alt='Texto que describa la imagen').w-75
      .row(titulo="")
        .col-4.col-md-3.col-lg-2.offset-3.bg-naranja.rounded-15.text-white.px-4.py-2.text-center
          p Estrategias didácticas activas
        .col-12
          .row
            figure.mt-4.col-4.col-md-3.col-lg-2.offset-3.d-flex.justify-content-center
              img(src='@/assets/template/tema-1-10.svg', alt='Texto que describa la imagen').w-75
      .row(titulo="")
        .col-4.col-md-3.col-lg-2.offset-4.bg-naranja.rounded-15.text-white.px-4.py-2.text-center
          p Ambientes de aprendizaje tipificados
        .col-12
          .row
            figure.mt-4.col-4.col-md-3.col-lg-2.offset-4.d-flex.justify-content-center
              img(src='@/assets/template/tema-1-11.svg', alt='Texto que describa la imagen').w-75
      .row(titulo="")
        .col-4.col-md-3.col-lg-2.offset-6.bg-naranja.rounded-15.text-white.px-4.py-2.text-center
          p Criterios de Evaluación
        .col-12
          .row
            figure.mt-4.col-4.col-md-3.col-lg-2.offset-6.d-flex.justify-content-center
              img(src='@/assets/template/tema-1-12.svg', alt='Texto que describa la imagen').w-75
      .row(titulo="")
        .col-4.col-md-3.col-lg-2.offset-5.offset-lg-8.bg-naranja.rounded-15.text-white.px-4.py-2.text-center
          p Descripción de la evidencia de aprendizaje
        .col-12
          .row
            figure.mt-4.col-4.col-md-3.col-lg-2.offset-5.offset-lg-8.d-flex.justify-content-center
              img(src='@/assets/template/tema-1-13.svg', alt='Texto que describa la imagen').w-75
      .row(titulo="")
        .col-4.col-md-3.col-lg-2.offset-6.offset-lg-9.bg-naranja.rounded-15.text-white.px-4.py-2.text-center
          p Observaciones
        .col-12
          .row
            figure.mt-4.col-4.col-md-3.col-lg-2.offset-6.offset-lg-9.d-flex.justify-content-center
              img(src='@/assets/template/tema-1-14.svg', alt='Texto que describa la imagen').w-75
    .row.mt-5
      .col-12.mt-4.p-5.bg-amarillo-claro   
        .row
          .col-12.col-lg-7.align-self-center
            p En la figura anterior se relacionan los siguientes elementos, es necesario precisar que algunos solo aplican a formación titulada.
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | Fase de proyecto (si el programa es de formación titulada)
              li 
                i.fas.fa-angle-right
                | Actividad de proyecto (si el programa es de formación titulada)
              li 
                i.fas.fa-angle-right
                | Competencia(s)
              li 
                i.fas.fa-angle-right
                | Resultados de aprendizaje.
              li 
                i.fas.fa-angle-right
                | Actividades de aprendizaje a desarrollar.
              li 
                i.fas.fa-angle-right
                | Duración actividad de aprendizaje (horas)
            ul.lista-ul.ms-4
              li 
                i.lista-ul__vineta
                | Horas de trabajo directo.
              li 
                i.lista-ul__vineta
                | Horas de trabajo independiente.
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | Estrategias didácticas activas.
              li 
                i.fas.fa-angle-right
                | Ambientes de aprendizaje tipificados:
            ul.lista-ul.ms-4
              li 
                i.lista-ul__vineta
                | Ambiente.
              li 
                i.lista-ul__vineta
                | Materiales de formación.
              li 
                i.lista-ul__vineta
                | Instructores responsables.
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | Criterios de evaluación.
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | Descripción de la evidencia de aprendizaje.
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | Observaciones.
          .col-5.d-none.d-lg-flex.align-self-center
            figure
              img(src='@/assets/template/tema-1-16.svg', alt='Texto que describa la imagen').margin-0-auto
    


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.tarjeta.color-acento-botones--borde
  border-color: #E8E8E8
.tabs-a__tab
  background-color: #E8E8E8
.bg-azul-claro-no
  background-color: #E8EEF3 !important
.bg-azul-claro:hover
  background-color: #12263F !important
  p
    color: $white !important
  .image-blanca
    display: block
  .image-azul
    display: none
.image-blanca
  display: none
.fondo-img-1
  background-image: url(../assets/template/tema-1-15.png)
  background-repeat: no-repeat
  background-size: cover
</style>
