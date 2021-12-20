<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Presentación de una propuesta
    
    .row.mt-4
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-1.svg', alt='Texto que describa la imagen').margin-0-auto.floating
      .col-12.col-lg-10.col-xl-11.align-self-center
        p El Sistema Integrado de Gestión y Autocontrol SENA - SIGA, incluye dentro de su módulo de Documentos, el formato GFPI-F-134 Planeación Pedagógica Proyecto Formativo. El recurso puede ser encontrado en el siguiente
        a.anexo.mb-4.mb-lg-0.mt-4(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[strong Enlace web.] http://compromiso.sena.edu.co/-Gestión de la Formación Profesional Integral.
    .row.mt-4
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 3
          p.mt-1.fst-italic Sistema CompromISO - SENA
        figure
          img(src='@/assets/template/tema-2-2.png', alt='Texto que describa la imagen')
    p.mt-5 De acuerdo con las necesidades e interés plasmados por el equipo responsable del diseño curricular  en el programa de formación complementaria o de formación titulada, es que se debe estructurar la Planeación Pedagógica como la base para el desarrollo de la formación, revise la ruta a continuación.
    .row.mt-4
      .col-10.offset-1
        .titulo-sexto.color-primario
          h5 Figura 4
          p.mt-1.fst-italic Sistema CompromISO - SENA
    .row.mb-5.text-center
      .col-6.col-sm-4.col-xl-3.mb-4.mb-xl-0.tarjeta-contenedor
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-3.png')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center.justify-content-center
              p.text-center Competencia
      .col-6.col-sm-4.col-xl-3.mb-4.mb-xl-0.tarjeta-contenedor
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-4.png')})`}")
            .tarjeta-flip__contenido.p-4
              p Ambientes de aprendizaje tipificados              
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right
                  | Ambiente
                li 
                  i.fas.fa-angle-right
                  | Materiales
                li 
                  i.fas.fa-angle-right
                  | Instructores

      .col-6.col-sm-4.col-xl-3.mb-4.mb-xl-0.tarjeta-contenedor
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-5.png')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center.justify-content-center
              p.text-center.py-5 Criterios de Evaluación

      .col-6.col-sm-4.col-xl-3.mb-4.mb-xl-0.tarjeta-contenedor
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-6.png')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center.justify-content-center
              p.text-center.py-5 Resultados de Aprendizaje

      .col-6.col-sm-4.col-xl-3.mb-4.mb-xl-0.tarjeta-contenedor.mt-xl-3
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-7.png')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center.justify-content-center
              p.text-center.py-5 Estrategias y Didácticas Activas

      .col-6.col-sm-4.col-xl-3.mb-4.mb-xl-0.tarjeta-contenedor.mt-xl-3
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-8.png')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center.justify-content-center
              p.text-center Evidencias de aprendizaje

      .col-6.col-sm-4.col-xl-3.offset-sm-2.offset-xl-0.mb-xl-0.tarjeta-contenedor.mt-xl-3
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-9.png')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.align-items-center.justify-content-center
              p.text-center Actividades de Aprendizaje a desarrollar 

      .col-6.col-sm-4.col-xl-3.smb-xl-0.tarjeta-contenedor.mt-xl-3
        .tarjeta.tarjeta-flip.color-acento-botones(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-10.png')})`}")
            .tarjeta-flip__contenido.p-4
              p.text-center.pt-xl-4 Duración
              ul.lista-ul.mt-3.text-start
                li 
                  i.fas.fa-angle-right
                  | Horas Trabajo Directo
                li 
                  i.fas.fa-angle-right
                  | Horas Trabajo Independiente
    .row.mt-4      
      .col-12.col-lg-10.col-xl-11.align-self-center
        p Para abordar la elaboración de la planeación pedagógica, se consideran los elementos en el orden presentado en la figura.
        p.mt-3 A continuación, se explican cada uno de los conceptos de la ruta de la Planeación Pedagógica partiendo de los lineamientos establecidos en el Decreto 1330 de 2019 y el modelo pedagógico de la formación profesional integral en el enfoque para el desarrollo de competencias y el aprendizaje por proyectos:
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-11.svg', alt='Texto que describa la imagen').margin-0-auto.floating
    .row.mt-5
      .col-8.offset-2
        ImagenInfograficaB.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-2-12.png', alt='Texto que describa la imagen')

          div(x="47.4%" y="4.4%" tooltip="Ambientes de Aprendizaje Tipificados" numero="")
            .h4 Ambientes de Aprendizaje Tipificados
            p son conjunto de condiciones que propician y facilitan el logro de los objetivos de la Formación Profesional Integral, conformado por:
            p.mt-3 Componente físico o de infraestructura, componente tecnológico y componente pedagógico, este último mediante estrategias como el trabajo en equipo, la investigación el acceso y utilización TIC que posibilitan junto con la mediación del instructor, una dinámica de transferencia creativa del conocimiento a situaciones reales.
          div(x="66%" y="24%" tooltip="Estrategias Didácticas Activas" numero="")
            .h4 Estrategias Didácticas Activas
            p Se conciben como los procedimientos (métodos, técnicas actividades, secuencias y recursos que desarrollan los instructores y los aprendices para organizar las acciones del proceso formativo de manera consciente, con el fin de construir y lograr metas previstas e imprevistas en el proceso de enseñanza aprendizaje, adaptando a los participantes de manera colaborativa y significativa.
          div(x="91%" y="46%" tooltip="Duración" numero="")
            .h4 Duración
            p Hace referencia al desarrollo de las actividades de aprendizaje y se reconoce como la duración de tiempo transcurrido entre el inicio y el final de una actividad planeada.
          div(x="81%" y="66%" tooltip="Criterios de Evaluación" numero="")
            .h4 Criterios de Evaluación
            p Son la expresión de logro del aprendiz en el proceso de aprendizaje, permite la emisión de un juicio evaluativo respecto a la aprehensión y desarrollo de capacidades con relación a un resultado de aprendizaje y los conocimientos de proceso de este resultado. Promueven la autoevaluación, la evaluación y la heteroevaluación durante el proceso de aprendizaje.  La totalidad de los criterios de evaluación de una competencia responden a la formación técnica y al desarrollo integral del aprendiz acorde con la política institucional.
          div(x="89%" y="86%" tooltip="Evidencias de Aprendizaje" numero="")
            .h4 Evidencias de Aprendizaje
            p Son referentes, que permiten identificar los logros alcanzados por los Aprendices; pueden ser de conocimiento, de desempeño y de producto, las cuales se relacionan estrechamente y de manera integral, con el aprender a aprender, aprender a hacer y aprender a ser.
          div(x="16%" y="72%" tooltip="Competencia" numero="")
            .h4 Competencia 
            p Es la capacidad de un buen desempeño en contextos complejos y auténticos. Se basa en la integración y activación de conocimientos, habilidades, destrezas, actitudes y valores.
          div(x="10%" y="40%" tooltip="Resultados de Aprendizaje" numero="")
            .h4 Resultados de Aprendizaje
            p Son enunciados acerca de lo que se espera que el estudiante sea capaz de hacer, comprender y/o sea capaz de demostrar una vez terminado un proceso formativo.
          div(x="27%" y="20%" tooltip="Actividades de Aprendizaje" numero="")
            .h4 Actividades de Aprendizaje
            p Son recursos para conseguir el aprendizaje y no sólo medios para comprobarlo, esta distinción permite clasificar las actividades de aprendizaje en dos categorías: las que meramente reproducen y las que aplican la información.
    p.mt-4 GFPI-AN-006 Conformación de Equipos de Desarrollo Curricular de Programas a Las Modalidades Virtual y a Distancia
    p.mt-3 La interrelación sistémica converge en el concepto de Competencia propia del SENA y enmarcada en los principios de la Formación Profesional Integral. En la figura siguiente se observan los tipos de competencias del Modelo SENA.
    .row.mt-4
      .col-10.offset-1
        .titulo-sexto.color-primario
          h5 Figura 5
          p.mt-1.fst-italic Modelo de Competencia SENA
    .row.mt-5
      .col-8.offset-2
        figure
          img(src='@/assets/template/tema-2-13.png', alt='Texto que describa la imagen')
        figcaption.mt-3 Nota: Grafico de la estructura general  de las competencias en el SENA.
    .row.mt-5.zoom-in
      .col-12.col-lg-7
        p De acuerdo a la Figura 5. Modelo de Competencia SENA, la Competencia laboral (Páez Luna, 2012) surge como respuesta a la capacidad de una persona para desempeñar funciones productivas en contextos variables, con base en los estándares de calidad establecidos por el sector productivo; en esta concepción subyace la intencionalidad institucional de responder pertinentemente a las necesidades del sector productivo en términos de la cualificación de los trabajadores, a través del cumplimiento de dos parámetros: uno, la formación a la medida según necesidades de cada sector y dos, los estándares de calidad establecidos y se plasman en el diseño de la Norma de Competencia Laboral, fuente primaria del diseño de los Programas de Formación.
      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-14.png', alt='Texto que describa la imagen')
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-primario
          h5 Figura 6
          p.mt-1.fst-italic Competencia Laboral
    .row.mt-5
      .col-12.col-md-10.offset-0.offset-md-1
        figure
          img(src='@/assets/template/tema-2-15.png', alt='Texto que describa la imagen')
    .row.mt-5.zoom-in
      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-16.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7
        p Los distintos tipos de competencia dan origen a tres categorías o tipologías de Resultados de Aprendizaje a saber: 
        ul.lista-ul.mt-3
          li 
            i.fas.fa-angle-right
            | Las Competencias Básicas, a los Resultados de Aprendizaje de carácter Básico ó RAB
          li 
            i.fas.fa-angle-right
            | Las Competencias Transversales, a los Resultados de Aprendizaje de carácter Transversal o RAT
          li 
            i.fas.fa-angle-right
            | Las Competencias Específicas a los Resultados de Aprendizaje de carácter Específico o RAE
        p.mt-4  Estos Resultados de Aprendizaje serán entregados interdisciplinariamente en desarrollo de la Planeación Pedagógica (o Interdisciplinaria) de los Proyectos Formativos.
        p.mt-4 De acuerdo con la guía de Diseño curricular 
        .row
          .col-10
            a.anexo.mb-4.mb-lg-0.mt-4(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[strong Anexo.]  GFPI-G-008_GUIA_DISEÑO_CURRICULAR
    .row.mt-5.zoom-in
      .col-12.col-lg-7
        p Para seleccionar las competencias específicas, el Equipo de Diseño Curricular realiza la revisión de Normas Sectoriales de Competencia Laboral NSCL nacionales e internacionales vigentes y registradas en el Sistema de Gestión Académico Administrativo, Estructuras Funcionales de la Ocupación (EFO) o Cualificaciones y que den respuesta a la ocupación.
        p.mt-3 Las competencias transversales serán obligatorias para los programas de formación técnicos y tecnológicos. Para los programas tecnológicos se incluirá adicionalmente la competencia de investigación.
        p.mt-3 Las competencias clave son obligatorias en programas tecnológicos y opcionales en los programas laborales, su inclusión la define el Equipos de Diseño Curricular basando su decisión en las características del programa de formación y en la naturaleza de las competencias específicas. La búsqueda en el Sistema de Gestión Académico Administrativo de estas competencias se puede realizar por palabra clave o código, estas competencias se describen a continuación:
      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-17.png', alt='Texto que describa la imagen')
    .row.mt-5
      .col-8.col-lg-5.offset-2.offset-lg-1
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-2-18.png', alt='Texto que describa la imagen')

          .tarjeta.bg-gris-claro.p-3(x="50%" y="26%" numero="")
            .h5.mb-2 Matemáticas
            p Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales
            
          .tarjeta.bg-gris-claro.p-3(x="37.4%" y="38.6%" numero="")
            .h5.mb-2 Ciencias  Naturales (física,  química o biología)
            p Aplicación de conocimientos de las ciencias naturales de acuerdo con situaciones del contexto productivo y social
            
          .tarjeta.bg-gris-claro.p-3(x="34.4%" y="50.4%" numero="")
            .h5.mb-2 TIC
            p Utilizar herramientas informáticas de acuerdo con necesidades de manejo de información.

          .tarjeta.bg-gris-claro.p-3(x="37.8%" y="63.2%" numero="")
            .h5.mb-2 Inglés
            p Interactuar en lengua inglesa de forma oral y escrita dentro de contextos sociales y laborales según los criterios establecidos por el marco común europeo de referencia para las lenguas
            
          .tarjeta.bg-gris-claro.p-3(x="49.8%" y="74.8%" numero="")
            .h5.mb-2 Comunicación
            p Desarrollar procesos de comunicación eficaces y efectivos, teniendo en cuenta situaciones de orden social, personal y productivo

      .col-8.col-lg-5.offset-2.offset-lg-1
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-2-19.png', alt='Texto que describa la imagen')

          .tarjeta.bg-gris-claro.p-3(x="46%" y="24.5%" numero="")
            .h5.mb-2 Ética y cultura de paz
            p Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz

          .tarjeta.bg-gris-claro.p-3(x="61%" y="34.4%" numero="")
            .h5.mb-2 Protección para la salud y el medio ambiente
            p Aplicar prácticas de protección ambiental, seguridad y salud en el trabajo de acuerdo con las políticas organizacionales y la normatividad vigente
            
          .tarjeta.bg-gris-claro.p-3(x="65.4%" y="48.4%" numero="")
            .h5.mb-2 Actividad física y  hábitos de vida saludable 
            p Generar hábitos saludables de vida mediante la aplicación de programas de actividad física en los contextos productivos y sociales

          .tarjeta.bg-gris-claro.p-3(x="60.8%" y="60.4%" numero="")
            .h5.mb-2 Cultura emprendedora y empresarial 
            p Gestionar procesos propios de la cultura emprendedora y empresarial de acuerdo con el perfil personal y los requerimientos productivo y social
            
          .tarjeta.bg-gris-claro.p-3(x="48.4%" y="70.8%" numero="")
            .h5.mb-2 Investigación 
            p Orientar investigación formativa según referentes técnicos
          
          .tarjeta.bg-gris-claro.p-3(x="27.7%" y="74.8%" numero="")
            .h5.mb-2 Derechos fundamentales del trabajo
            p Ejercer derechos fundamentales del trabajo en el marco de la constitución política y los convenios internacionales
    .titulo-segundo.mt-5.color-acento-botones
      #t_2_1.h2 2.1  Consideraciones para la Planeación Pedagógica de la Formación Titulada y Complementaria
    p.mt-5 A continuación, se presentan los elementos diferenciadores que se deben tener en cuenta al momento de la elaboración de una formación titulada y una complementaria.
    .h4.mt-4 Planeación Pedagógica de la Formación Titulada
    .row.mt-5.zoom-in
      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-21.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7
        p Recordemos que un Programa de Formación Titulada  de acuerdo con el programa de Gestión de Formación Profesional Integral en su Guía de Desarrollo Curricular código GFPI-G-012 V3 
        .row.mt-3
          .col-10
            a.anexo.mb-4.mb-lg-0.mt-4(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[strong Anexo.] GFPI-G-012_Guia_Desarrollo_Curricular
        p.mt-3 Es una modalidad de la formación profesional integral que imparte el SENA, dirigida a desarrollar y fortalecer las competencias del recurso humano, comprende las actividades de formación, entrenamiento y reentrenamiento en temas específicos y se caracteriza por que las acciones de formación conducen al otorgamiento de un título de formación profesional.
    .row.mt-5.zoom-in
      .col-12.col-lg-7
        p En el SENA se cuenta con los equipos de Desarrollo Curricular  quienes acuerdan los períodos para sus secuencias de planeación pedagógica, quienes consideran y acuerdan conveniente mantener unos períodos regulares, ya sean trimestrales, mensuales o semanales.  Los criterios para estipular la duración de la planeación quedan a discreción del Equipo, siempre en coherencia con la duración estipulada para el desarrollo de las competencias contempladas en el Programa de Formación.
        p.mt-3 Para la elaboración de la Planeación Pedagógica de un Programa de Formación Titulada se debe tomar como referencia el Proyecto Formativo, el cual establece las duraciones de cada Actividad de Proyecto. Como cada actividad comprende un número determinado de Resultados de Aprendizajes, se pueden establecer cuáles se deben abordar en un lapso o período determinado, programando el ambiente de formación y asociando los materiales de formación, así como las condiciones relacionadas con la Seguridad y Salud en el Trabajo, así como la gestión ambiental.
      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-22.png', alt='Texto que describa la imagen')
    .row.mt-5.zoom-in
      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-23.svg', alt='Texto que describa la imagen')
      .col-12.col-lg-7.align-self-center
        p En cualquier caso, el Equipo de Desarrollo Curricular cuenta con la potestad de tomar las decisiones que considere más adecuadas a cada situación particular en contexto, tanto en el orden cualitativo como cuantitativo, con la condición de que mantengan los siguientes criterios lógicos y objetivos para la distribución de los Resultados de Aprendizaje de carácter específico y de integralidad, así como a los principios pedagógicos para el diseño pedagógico de las actividades de aprendizaje y del resto de variables implicadas.
    .row.mt-5
      .col-12.mt-4.p-5.bg-amarillo-claro   
        .row
          .col-12.col-lg-7.align-self-center
            .h4 Planeación Pedagógica Complementaria
            p.mt-4 Para el caso de la formación complementaria es importante recordar que es una modalidad que se desarrolla puntualmente para responder a una necesidad específica del sector productivo, para la elaboración de la Planeación Pedagógica de un Programa de Formación Complementaria, de acuerdo con Gestión de Formación Profesional Integral Guía de Desarrollo Curricular código GFPI-G-012 versión 03,  se debe tomar como referencia no en su totalidad sino las partes específicas de la Competencia Laboral, la cual establece la duración  de las Actividades Específicas que requieren ser profundizadas; en esta formación no se formula ni registra proyecto formativo en el aplicativo SOFIA plus.
          .col-5.d-none.d-lg-flex.align-self-center
            figure
              img(src='@/assets/template/tema-2-24.svg', alt='Texto que describa la imagen').margin-0-auto
    .titulo-segundo.mt-5.color-acento-botones
      #t_2_2.h2 2.2  Criterios de articulación de competencias básicas y transversales y los resultados de aprendizaje esperados
    p.mt-5 De acuerdo con la circular 344 de 2012 – Servicio Nacional de Aprendizaje – SENA, se considera los siguientes criterios para la articulación de las competencias y los resultados de aprendizaje:
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris").mt-5
      .row(titulo="Criterio de Antecedente – Consecuente")
        .col-12.col-lg-7.align-self-center
          p.mt-4 El cual es la secuencia lógica del antes y después en desarrollo del proceso formativo de los Resultados de Aprendizaje. Señala que los Resultados de Aprendizaje Básico y Resultados de Aprendizaje Transversal se combinarán y desarrollarán pedagógicamente en función de los Resultados de Aprendizaje Específicos (Técnicos); es decir, el carácter genérico de los Resultados de Aprendizaje Básico y Resultados de Aprendizaje Transversal se concretará según el objeto de estudio o la naturaleza de las Competencias Específicas (Técnicas), se trata entonces de identificar los conocimientos que se deben abordar primero y que sirven de base para desarrollar conocimientos posteriores.
        .col-5.d-none.d-lg-flex.align-self-center
          figure
            img(src='@/assets/template/tema-2-25.png', alt='Texto que describa la imagen').px-5.margin-0-auto
    
      div.row(titulo="Criterio de Pertinencia")
        .col-12.col-lg-7.align-self-center
          p.mt-4 Los Resultados de Aprendizaje Específicos del programa se articularán y desarrollará en función de los Resultados de Aprendizaje de Integralidad, esto con la intención de mantener la vocación institucional de formación para el trabajo y el desarrollo humano, es posible, una vez avanzado el Proyecto Formativo, realizar más adelante procesos formativos de carácter más general o de fundamentación (propios de los RAB y RAT) sin perder nunca de vista la naturaleza y pertinencia específica de los Proyectos Formativos, por ejemplo, un Resultado de Aprendizaje específico - disciplinar, se puede acompañar de uno de la Competencia relacionada con Comunicación para la elaboración de informes.
        .col-5.d-none.d-lg-flex.align-self-center
          figure
            img(src='@/assets/template/tema-2-26.png', alt='Texto que describa la imagen').px-5.margin-0-auto
      div.row(titulo="Criterio de sistematicidad")
        .col-12.col-lg-7.align-self-center
          p.mt-4 Hace relación a la concepción, planeación, ejecución y evaluación de todos los tipos de competencias dentro de un enfoque sistémico en el cual todas las actividades están relacionadas entre sí y orientadas hacia el mismo fin: el desarrollo humano integral de los Aprendices y especialmente, el Desarrollo de las Competencias Laborales contempladas por los Proyectos Formativos.
        .col-5.d-none.d-lg-flex.align-self-center
          figure
            img(src='@/assets/template/tema-2-27.png', alt='Texto que describa la imagen').px-5.margin-0-auto
      div.row(titulo="Criterio de coherencia")
        .col-12.col-lg-7.align-self-center
          p.mt-4 Implica que todos los componentes del proceso formativo en las fases de planeación pedagógica, ejecución y evaluación están interrelacionados de manera lógica, buscando así la optimización del tiempo y los recursos y el cumplimiento de los propósitos formativos de manera lógicamente integrada.
          p.mt-3 En particular el criterio de coherencia supone el cumplimiento del principio de causalidad que debe animar todo el proceso de planeación pedagógica del Proyecto Formativo así: si los Aprendices desarrollan las Actividades de Aprendizaje se logran los Resultados de Aprendizaje; si se logran los Resultados de Aprendizaje, se alcanza la Competencia, entre otros.
        .col-5.d-none.d-lg-flex.align-self-center
          figure
            img(src='@/assets/template/tema-2-33.png', alt='Texto que describa la imagen').w-50.margin-0-auto
      div.row(titulo="Criterio de continuidad")
        .col-12.col-lg-7.align-self-center
          p.mt-4 En virtud de la existencia de conjuntos combinados de los Resultados de Aprendizaje del programa de formación, señala que no pueden existir semanas de trabajo, ni de instructores ni de Aprendices, dedicadas únicamente a uno de los dos componentes de la integralidad de la Formación Profesional. En todas las semanas de trabajo pedagógico y administrativo que dure cada Proyecto Formativo se distribuirán y trabajarán proporcionalmente tanto el componente técnico como el social.
        .col-5.d-none.d-lg-flex.align-self-center
          figure
            img(src='@/assets/template/tema-2-28.png', alt='Texto que describa la imagen').px-5.margin-0-auto
    separador.mt-3 
    
    .titulo-segundo.mt-5.color-acento-botones
      #t_2_3.h2 2.3  Criterios para el diseño de las actividades de aprendizaje
    .row.mt-4      
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-29.svg', alt='Texto que describa la imagen').margin-0-auto.floating
      .col-12.col-lg-10.col-xl-11.align-self-center
        p Las actividades de aprendizaje propician y facilitan el logro de los objetivos de la Formación Profesional Integral, para su diseño se deben tener en cuenta el desarrollo de las dimensiones: actitudinal, cognitiva y procedimental. Revise la información de cada dimensión en la siguiente infografía.
    .h4.text-center.mt-4 Dimensiones Actividades de Aprendizaje 
    .row.mt-5
      .col-8.col-lg-4.offset-2.offset-lg-0.modal-rojo
        ImagenInfograficaB.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-2-30.png', alt='Texto que describa la imagen')
          div(x="42%" y="5%" tooltip="Saber conocer" numero=" ").row
            .col-12
              .h4 Cognitivas: (SABER)
              p Comprende el área de conceptos, categorías y relaciones que abarca las subáreas del conocimiento, la comprensión, la aplicación, el análisis, la síntesis y la evaluación.
            
        
      .col-8.col-lg-4.offset-2.offset-lg-0.modal-morado
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-2-31.png', alt='Texto que describa la imagen')
          div(x="42%" y="5%" tooltip="Saber conocer" numero=" ")
            .col-12
              .h4 Actitudinal: (SER)
              p Comprende las actuaciones del aprendiz frente a el mismo, su entorno natural y social, buscando el desarrollo de su autonomía.

      .col-8.col-lg-4.offset-2.offset-lg-0.modal-amarillo
        ImagenInfograficaB.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-2-32.png', alt='Texto que describa la imagen').px-3
          div(x="49%" y="5%" tooltip="Saber conocer" numero=" ")
            .col-12
              .h4 Procedimental: (SABER-HACER) 
              p Comprende los modos de actuación que se requieren para llevar a cabo con eficiencia y eficacia las actividades establecidas para aprender una destreza manual, mecánica o intelectual que permita al aprendiz aumentar su capacidad de laboral.
    .row.mt-5.zoom-in
      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-36.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7
        p Como apoyo para su elaboración se puede utilizar fundamentos en Taxonomías de verbos como el propuesto por Bloom, para la escritura de Resultados de Aprendizaje. Para saber más, se le invita a revisar el blog dispuesto en el material complementario sobre la taxonomía de Bloom.
        .cajon.color-primario.p-4.mt-4.bg-naranja-claro
          p Nota:  Recuerde que, para comenzar un proceso formativo a partir de resultados de aprendizaje establecidos previamente, se deben pensar intencionalmente los procedimientos, acciones y operaciones tanto de enseñanza como de aprendizaje y no dejarlo a la inspiración del momento o a la propia experiencia.
        p.mt-4 Ahora bien, el diseño de las actividades de aprendizaje tiene dos momentos: enunciar el conjunto de actividades y acciones a realizar para alcanzar el resultado de aprendizaje.
    .h4.mt-5 Momento 1: Actividades Técnicas Aprendizaje
    p.mt-4 Tienen como consecuencia el logro del Resultado de Aprendizaje objeto de análisis y en función de ello, tienen una forma lingüística, como se observa a continuación: 
    .row.mt-4
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 7
          p Estructura Gramatical ATA
      .col-6.col-md-4.col-lg-2.offset-2.offset-md-4.offset-lg-1.py-5.px-3.bg-amarillo.rounded-15.text-center
        .h4.text-morado Verbo Infinito
        .h5.mb-0.mt-2 (máximo 1)
      .col-6.col-md-4.col-lg-2.offset-lg-0.offset-2.offset-md-4.mt-3.mt-lg-0.text-center.align-self-center
        .plus.text-morado +
      .col-6.col-md-4.col-lg-2.offset-2.offset-md-4.offset-lg-0.py-5.px-3.bg-amarillo.rounded-15.text-center
        .h4.text-morado Objeto
        .h5.mb-0.mt-2 (máximo 2)
      .col-6.col-md-4.col-lg-2.offset-lg-0.offset-2.offset-md-4.mt-3.mt-lg-0.text-center.align-self-center
        .plus.text-morado +
      .col-6.col-md-4.col-lg-2.offset-2.offset-md-4.offset-lg-0.py-5.px-3.bg-amarillo.rounded-15.text-center
        .h4.text-morado Condición
        .h5.mb-0.mt-2 (máximo 2)
    figcaption.mt-3 Nota:. Tomado de Guía de Desarrollo de Formación por módulos GFPI-G-029. v.03
    .h4.mt-5 Momento 2: Acciones a realizar
    .row.mt-4      
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-37.svg', alt='Texto que describa la imagen').margin-0-auto.floating
      .col-12.col-lg-10.col-xl-11.align-self-center
        p Para tener claridad de cuáles y cuántas acciones deben realizar los aprendices se deben responder la pregunta: #[strong ¿Qué debe aprender a aprender, aprender a hacer y evidenciar desde el ser, el aprendiz desde lo cognitivo, procedimental, y valorativo-actitudinal para lograr un resultado o conjunto de resultados de aprendizaje?]
    .row.mt-4
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 8
          p Niveles para la formulación de la ATA
        .row.mt-4
          .col-8.col-lg-4.offset-2.offset-lg-1
            figure
              img(src='@/assets/template/tema-2-38.png', alt='Texto que describa la imagen')
          .col-8.col-lg-4.offset-2.offset-lg-4.mt-3
            figure
              img(src='@/assets/template/tema-2-39.png', alt='Texto que describa la imagen')
          .col-8.col-lg-4.offset-2.offset-lg-7.mt-3
            figure
              img(src='@/assets/template/tema-2-40.png', alt='Texto que describa la imagen')
        figcaption.mt-3 Nota. Tomado de Guía de Desarrollo de Formación por módulos GFPI-G-029. v.03 
    .row.mt-5
      .col-12.col-lg-7
        .row
          .col-4.col-xl-2.d-none.d-xl-flex.align-self-center
            figure
              img(src='@/assets/template/tema-2-41.svg', alt='Texto que describa la imagen').margin-0-auto.floating.px-2
          .col-12.col-lg-10.col-xl-10.align-self-center
            p  El número adecuado de actividades técnicas de aprendizaje; lo define el Equipo de Desarrollo Curricular, se sugiere que un resultado de aprendizaje contenga mínimo una (1) y máximo cuatro (4) actividades técnicas de aprendizaje.  Se debe tener en cuenta que las actividades no pueden ser el resultado de tareas.
        p.mt-4 El verbo a utilizar en las actividades técnicas de aprendizaje debe ser medible, estas actividades deben ser ejecutadas en un tiempo acorde con los recursos, materiales y equipos disponibles. 
        p.mt-4 El diseño de actividades técnicas de aprendizaje debe estar orientado a:
        ul.lista-ul.mt-3
          li 
            i.fas.fa-angle-right
            | Organizar casos reales en un contexto laboral y en el entorno social.
          li 
            i.fas.fa-angle-right
            | Situaciones problema o situaciones formativas que involucren al aprendiz con la función laboral y social en la cual se van a desempeñar
        p.mt-4 En la siguiente figura se muestran las características a las cuales deben responder una actividad técnica de aprendizaje y deben ser tenidas en cuenta por el equipo técnico para su planteamiento diferenciándose de un resultado de aprendizaje.
      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-42.svg', alt='Texto que describa la imagen').w-75.margin-0-auto
    .row.mt-4
      .col-10.offset-1
        .titulo-sexto.color-secundario
          h5 Figura 9
          p Características de la ATA
    .row.mt-4
      .col-4.col-lg-3.col-xl-2
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-49.png')})`}")
            .tarjeta-flip__contenido
              .row.h-100
                .col-10.offset-1.box-shadow.rounded-15
                  figure
                    img(src='@/assets/template/tema-2-43.svg', alt='Texto que describa la imagen').margin-0-auto.p-4
                  .h4.text-morado.pb-4.text-center Conocimientos Previos
      .col-4.col-lg-3.col-xl-2
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-50.png')})`}")
            .tarjeta-flip__contenido
              .row.h-100
                .col-2.align-self-center
                  figure
                    img(src='@/assets/template/arrow.svg', alt='Texto que describa la imagen').h-200
                .col-10.box-shadow.rounded-15
                  figure
                    img(src='@/assets/template/tema-2-44.svg', alt='Texto que describa la imagen').margin-0-auto.p-4
                  .h4.text-morado.pb-4.text-center Alistamiento
      .col-4.col-lg-3.col-xl-2
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-51.png')})`}")
            .tarjeta-flip__contenido
              .row.h-100
                .col-2.align-self-center
                  figure
                    img(src='@/assets/template/arrow.svg', alt='Texto que describa la imagen').h-200
                .col-10.box-shadow.rounded-15
                  figure
                    img(src='@/assets/template/tema-2-45.svg', alt='Texto que describa la imagen').margin-0-auto.p-4
                  .h4.text-morado.pb-4.text-center Planeación
      .col-4.col-lg-3.col-xl-2.mt-4.mt-lg-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-52.png')})`}")
            .tarjeta-flip__contenido
              .row.h-100
                .col-2.align-self-center
                  figure
                    img(src='@/assets/template/arrow.svg', alt='Texto que describa la imagen').h-200
                .col-10.box-shadow.rounded-15
                  figure
                    img(src='@/assets/template/tema-2-46.svg', alt='Texto que describa la imagen').margin-0-auto.p-4
                  .h4.text-morado.pb-4.text-center Información especializada
      .col-4.col-lg-3.col-xl-2.mt-4.mt-lg-4.mt-xl-0.offset-lg-3.offset-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-53.png')})`}")
            .tarjeta-flip__contenido
              .row.h-100
                .col-2.align-self-center
                  figure
                    img(src='@/assets/template/arrow.svg', alt='Texto que describa la imagen').h-200
                .col-10.box-shadow.rounded-15
                  figure
                    img(src='@/assets/template/tema-2-47.svg', alt='Texto que describa la imagen').margin-0-auto.p-4
                  .h4.text-morado.pb-4.text-center Producto
      .col-4.col-lg-3.col-xl-2.mt-4.mt-lg-4.mt-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/template/tema-2-54.png')})`}")
            .tarjeta-flip__contenido
              .row.h-100
                .col-2.align-self-center
                  figure
                    img(src='@/assets/template/arrow.svg', alt='Texto que describa la imagen').h-200
                .col-10.box-shadow.rounded-15
                  figure
                    img(src='@/assets/template/tema-2-48.svg', alt='Texto que describa la imagen').margin-0-auto.p-4
                  .h4.text-morado.pb-4.text-center Socialización
    figcaption.mt-3 Nota. Tomado de Guía de Desarrollo de Formación por módulos GFPI-G-029. v.03
    separador.mt-3
    
    .titulo-segundo.mt-5.color-acento-botones
      #t_2_4.h2 2.4  Criterios cuantitativos para el diseño de las actividades de aprendizaje
    .row.mt-4      
      .col-2.col-xl-1.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-55.svg', alt='Texto que describa la imagen').margin-0-auto.floating
      .col-12.col-lg-10.col-xl-11.align-self-center
        p Para el Diseño de las Actividades de Aprendizaje no existe una regla matemática a la hora de calcular el número adecuado de Actividades de Aprendizaje con respecto a uno o varios Resultados de Aprendizaje. Depende de dos factores:
    .row.mt-5
      .col-8.col-lg-6.offset-2.offset-lg-0.position-relative.px-0
        .row.px-4
          figure.px-0
            img(src='@/assets/template/tema-2-56.png', alt='Texto que describa la imagen')
          figure.image-cover
            img(src='@/assets/template/tema-2-57.png', alt='Texto que describa la imagen')
      .col-8.col-lg-6.offset-2.offset-lg-0.position-relative.px-0
        .row.px-4
          figure.px-0
            img(src='@/assets/template/tema-2-58.png', alt='Texto que describa la imagen')
          figure.image-cover
            img(src='@/assets/template/tema-2-59.png', alt='Texto que describa la imagen')
    p.mt-5 Con base en esto, se darían los siguientes casos:
    .row.mt-5
      .col-8.col-lg-6.offset-2.offset-lg-3
        figure
          img(src='@/assets/template/tema-2-60.png', alt='Texto que describa la imagen')
    .row.mt-5
      .col-12.col-lg-7.align-self-center
        ul.lista-ul.mt-3
          li 
            i.fas.fa-angle-right
            | La suma de los tiempos de las actividades de aprendizaje, deben corresponder con las duraciones establecidas en el proyecto formativo (formación titulada)
          li 
            i.fas.fa-angle-right
            | En cuanto al número de actividades de aprendizaje que se han de diseñar para cierto número de Resultados de Aprendizaje, se debe tener en cuenta que las primeras presentan un alto nivel de generalidad y su desglose pedagógico se lleva a cabo en las Guías de Aprendizaje.
          li 
            i.fas.fa-angle-right
            | Como los tiempos de formación son cortos, los procesos de aprendizaje deben ser eficientes en recursos y tiempo. Esto apunta al criterio de economía.
          li 
            i.fas.fa-angle-right
            | La estructura lingüística de los enunciados debe ser lo más concisa y precisa posible, evitando que sean muy largos; eso sin dejar de lado su densidad desde un punto de vista semántico (que expresen mucho significado)
      .col-5.d-none.d-lg-flex
        figure
          img(src='@/assets/template/tema-2-61.svg', alt='Texto que describa la imagen')
    separador.mt-3
    
    .titulo-segundo.mt-5.color-acento-botones
      #t_2_5.h2 2.5  Criterios cualitativos para el diseño de las actividades de aprendizaje
    p.mt-4 Tenga en cuenta los siguientes criterios cualitativos al momento de diseñar las actividades de aprendizaje:
    .row.mt-5
      .col-12.mt-4.p-5.bg-amarillo-claro   
        .row
          .col-5.d-none.d-lg-flex
            figure
              img(src='@/assets/template/tema-2-62.svg', alt='Texto que describa la imagen')
          .col-12.col-lg-7.align-self-center 
            p Tenga en cuenta los siguientes criterios cualitativos al momento de diseñar las actividades de aprendizaje:
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | Cubrir las tres áreas de desarrollo: cognitiva, procedimental y valorativa-actitudinal (Saber, Hacer y Ser)
              li 
                i.fas.fa-angle-right
                | Determinar si la actividad es individual o en equipo.
              li 
                i.fas.fa-angle-right
                | Determinar si la modalidad es presencial o desescolarizada.
              li 
                i.fas.fa-angle-right
                | Motivar al aprendiz, correspondiendo a sus intereses, su estilo de aprendizaje y su ejecución es posible en diversos contextos y mediante varias fuentes de conocimiento.
              li 
                i.fas.fa-angle-right
                | Ser coherentes con el nivel y tipo de formación; además de las competencias a desarrollar.
              li 
                i.fas.fa-angle-right
                | Ser redactadas con la estructura V+O+C: el verbo utilizado es transitivo en infinitivo. Se sugiere acudir a la “Taxonomía de Verbos”.
              li 
                i.fas.fa-angle-right
                | Las actividades de aprendizaje pueden tener carácter sincrónico, requiriendo la presencia de dos o más instructores al mismo tiempo y escenario, o pueden ser de carácter asincrónico, desarrollada en distintos tiempos y espacios con la condición de mantener la coherencia y sistematicidad del proceso formativo.
    .row.mt-5.zoom-in
      .col-12.col-lg-7
        p Para cerrar la elaboración de la planeación pedagógica, se deben tener en cuenta:
        ul.lista-ul.mt-3
          li 
            i.fas.fa-angle-right
            | La determinación de estrategias didácticas activas constituye un conjunto de procedimientos propuestos y utilizados por el equipo ejecutor de manera intencional y planificada, con el fin de facilitar el desarrollo de las actividades de aprendizaje.
          li 
            i.fas.fa-angle-right
            | La caracterización de los ambientes de aprendizaje, recursos, instructores y la evaluación a través de la estructuración de las Evidencias de Aprendizaje que el aprendiz debe construir y aportar al proceso formativo. Los productos deben ceñirse a las fases del Proyecto Formativo, de tal forma que se encuentren en correspondencia con los Resultados de Aprendizaje implicados.
      .col-5.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-2-63.png', alt='Texto que describa la imagen')
    


</template>

<script>
export default {
  name: 'Tema2',
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
.fondo-img-1
  background-image: url(../assets/template/tema-2-56.png)
  background-repeat: no-repeat
  background-size: cover
.h-200
  heigth: 200% !important
  max-height: 200% !important
.plus
  font-size: 5rem
.bg-amarillo
  background: linear-gradient(265deg, #FFB6004D, #FFB600)
.acordion-border
  border-top: 2px solid #E0E0E0
  border-bottom: 5px solid #0F1027
.col-8.col-lg-4 .img-infografica-b__item
  width: 7.5%
.modal-morado
  .img-infografica-b__modal
    border-color: #5A189A
.modal-amarillo
  .img-infografica-b__modal
    border-color: #FFB600
.color-acento-botones .img-infografica-b__modal .img-infografica-b__modal__btn-cerrar .fa-times::before
  color: #5A189A
.color-secundario .img-infografica-b__modal .img-infografica-b__modal__btn-cerrar .fa-times::before
  color: #FFB600
</style>
