const messages = {
  en: {
    data: {
      hello: 'hello world',
      title: 'Professor & Game Designer',
      portfolio: 'Portfolio',
      header: {
        card1:{
          title: 'Game Designer',
          organization: 'Chatora Games',
        },
        card2:{
          title: 'Professor of Computer Science',
          organization: 'National University of Misiones',
        },
        card3:{
          title: 'Video Game Design and Programming Technician',
          organization: 'National University of the Littoral',
        }
      },
      portfolio: {
        card1:{
          title: 'Verdandi - Norse Legends',
          description: 'Verdandi is an experimental 2D strategy video game, where we assume the role of a Valkyrie, who using the power of the Viking runes can manipulate the events of combat.',
        },
        card2:{
          title: 'Rabbuble',
          description: 'Rabbuble is a 2D platform game, travel between bubbles and pick up the carrots but watch out for obstacles.',
        }
      },
      articles: {
        in: "in",
        of: "of"
      },
      interface: {
        download: "Download",
      }

    }
  },
  es: {
    data: {
      hello: 'こんにちは、世界',
      title: 'Profesor y diseñador de videojuegos',
      portfolio: 'Portfolio',
      header: {
        card1:{
          title: 'Diseñador de Videojuegos',
          organization: 'Chatora Games',
        },
        card2:{
          title: 'Profesor Universitario en Computación',
          organization: 'Universidad Nacional de Misiones',
        },
        card3:{
          title: 'Técnico en Diseño y Programación de Videojuegos',
          organization: 'Universidad Nacional del Litoral',
        }
      },
      portfolio: {
        card1:{
          title: 'Verdandi - Leyendas Nordicas',
          description: 'Verdandi es un videojuego experimental de estrategia 2D, donde asumimos el rol de una valquiria, que empleando el poder de las runas vikingas puede manipular los eventos del combate.',
        },
        card2:{
          title: 'Rabbuble',
          description: 'Rabbuble es un juego de plataformas en 2D, viaja entre burbujas y recoge las zanahorias pero ten cuidado con los obstáculos.',
        }
      },
      articles: {
        in: "en",
        of: "de"
      },
      interface: {
        download: "Descargar",
      }
    }
  }
}

const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, 
})

new Vue({
    i18n,
    el: '#app',
    data: {
      message: 'Gastón Caminiti',
      langs: ['es', 'en'], 
      fcards: [false, false, false, false, false, false, false, false, false],
      mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
    },
    methods: {
      show_card: function(index){
        this.$set(this.fcards, index, true)
      },
      hide_card: function(index){
        this.$set(this.fcards, index, false)
      }
    }
})