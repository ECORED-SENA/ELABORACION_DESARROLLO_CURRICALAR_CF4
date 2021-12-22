export default {
  global: {
    componenteFormativo: 'Planeación Pedagógica',
    descripcionCurso:
      'A través del desarrollo de este componente adquirirá elementos conceptuales y prácticos que le permitirán elaborar la planeación pedagógica en el procedimiento de desarrollo curricular.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Concepto',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Elaboración de la planeación pedagógica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Consideraciones para la Planeación Pedagógica de la Formación Titulada y Complementaria',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Criterios de articulación de competencias básicas y transversales y los resultados de aprendizaje esperados',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Criterios para el diseño de las Actividades de Aprendizaje',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Criterios cuantitativos para el Diseño de las Actividades de Aprendizaje',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Criterios cualitativos para el diseño de las actividades de aprendizaje',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Eduteka (2019). La Taxonomía de Bloom y sus actualizaciones. [Web log post]. Blogspot.',
      link: 'https://eduteka.icesi.edu.co/articulos/TaxonomiaBloomCuadro',
    },
    {
      referencia: 'MEN (2015). Decreto 1330 de 2015.',
      link:
        'https://www.mineducacion.gov.co/1759/articles-387348_archivo_pdf.pdf',
    },
    {
      referencia:
        'Páez Luna, D. L. (2012). El modelo pedagógico de la formación profesional integral en el enfoque para el desarrollo de competencias y el aprendizaje por proyectos.',
      link: '',
    },
    {
      referencia:
        'SENA. (2020). Guía de Desarrollo Curricular. Publicaciones SENA Dirección General.',
      link: '',
    },
    {
      referencia:
        'SENA. (2020). Guía de Diseño Curricular. Publicaciones SENA Dirección General.',
      link: '',
    },
    {
      referencia:
        'SENA. (30 de 09 de 2013). Anexo Orientaciones Pedagógicas para la Planeación Pedagógica de los Proyectos Formativos.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente de aprendizaje',
      significado:
        'Es el conjunto de condiciones que propician y facilitan el logro de los objetivos de la Formación Profesional Integral, conformado por: componente físico o de infraestructura, componente tecnológico y componente pedagógico, este último mediante estrategias como el trabajo en equipo, la investigación, el acceso y utilización de TIC que posibilitan junto con la mediación del instructor, una dinámica de transferencia creativa del conocimiento a situaciones reales.',
    },
    {
      termino: 'Competencia',
      significado:
        '“Demostrada capacidad para utilizar conocimientos, destrezas y habilidades personales, sociales y metodológicas, en situaciones de trabajo o estudio y en el desarrollo profesional y personal…”. (Comisión Europea de Educación y Cultura, 2008)',
    },
    {
      termino: 'Desarrollo curricular',
      significado:
        'Proceso mediante el cual se planea, diseña y ejecuta la ruta de aprendizaje de cada aprendiz, mediante proyectos formativos, planeación pedagógica; que contienen actividades de aprendizaje, y aplicación de técnicas didácticas activas que permiten desarrollar sus competencias con ritmos de aprendizaje personalizados.',
    },
    {
      termino: 'Resultado de aprendizaje',
      significado:
        'Expresión de lo que una persona sabe, comprende y es capaz de hacer después de un proceso de aprendizaje. Los resultados de aprendizaje se expresan en términos de conocimientos, destrezas, autonomía y responsabilidad.',
    },
  ],
  complementario: [
    {
      texto:
        'Eduteka (2019). La Taxonomía de Bloom y sus actualizaciones. [Web log post]. Blogspot. https://eduteka.icesi.edu.co/articulos/TaxonomiaBloomCuadro',
      tipo: 'blog',
      link: 'https://eduteka.icesi.edu.co/articulos/TaxonomiaBloomCuadro',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Cristina Hurtado Zúñiga',
        cargo: 'Instructora Experta Temática',
        centro: 'Centro de Desarrollo Tecnológico Industrial – Valle',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Fernando Sarmiento Betancourth',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Lizeth Karina Manchego Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
