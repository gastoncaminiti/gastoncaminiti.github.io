const messages = {
  en: {
    data: {
      title: 'Professor & Game Designer',
      portfolio: 'Portfolio',
      header: {
        card1:{
          title: 'Game Designer',
          organization: 'Chatora Games',
        },
        card2:{
          title: 'University Professor of Computer Science',
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
          title: 'Zamna Atlante',
          description: 'Open source project destinate to learn development for 2D platform games in Godot 3.',
        },
        card3:{
          title: 'Sunset Revenge',
          description: 'Sunset Revenge is a Fangame of Sunset Riders. API Kongregate integration.',
        },
        card4:{
          title: 'Rabbuble',
          description: 'Rabbuble is a 2D platform game, travel between bubbles and pick up the carrots but watch out for obstacles.',
        },
        card5:{
          title: 'Bulletman',
          description: 'Shoot bulletman and get the star. This project simulate ragdoll physics in 2D world.',
        },
        card6:{
          title: 'Sumtrain',
          description: 'Make sums to advance the train. If you miss, a wagon  disappears.',
        },
        card7:{
          title: 'Total Tank',
          description: 'Total Tank is an arcade game inspirate in Battle City. Defeate your enemies before lose your armor.',
        },
        card8:{
          title: 'West Saloon',
          description: 'Defeat the bandits and save dogs. Duck Hunt  with cowboy style.',
        },
        card9:{
          title: 'SAB "Mi Beca" ',
          description: 'Development and maintenance of the system "Mi Beca" used by the Faculty of Chemical and Natural Sciences of the National University of Misiones.',
        }
      },
      work: {
        title: "Work Experience",
        experience1:{
          title:"a"
        }
      },
      conferences: {
        title: "Conferences",
        conference1:{
          title:"a"
        }
      },
      volunteer: {
        title: "Volunteering",
        volunteer1:{
          title:"a"
        }
      },
      articles: {
        in: "in",
        of: "of"
      },
      interface: {
        download: "Download",
        show: "Show"
      }

    }
  },
  es: {
    data: {
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
          title: 'Zamna Atlante',
          description: 'Proyecto de código abierto destinado a aprender desarrollo de juegos de plataforma 2D en Godot 3.',
        },
        card3:{
          title: 'Sunset Revenge',
          description: 'Sunset Revenge es un Fangame de Sunset Riders. Integración de API Kongregate.',
        },
        card4:{
          title: 'Rabbuble',
          description: 'Rabbuble es un juego de plataformas en 2D, viaja entre burbujas y recoge las zanahorias pero ten cuidado con los obstáculos.',
        }, 
        card5:{
          title: 'Hombre Bala',
          description: 'Dispara al hombre bala y consigue la estrella. Este proyecto simula la física ragdoll en un mundo 2D.',
        },
        card6:{
          title: 'Sumtrain',
          description: 'Realiza sumas para avanzar el tren. Si fallas un vagón desaparece. ',
        },
        card7:{
          title: 'Total Tank',
          description: 'Total Tank es un juego arcade inspirado en Battle City. Vence a tus enemigos antes de perder tu armadura.',
        },
        card8:{
          title: 'West Saloon',
          description: 'Derrota a los bandidos y salvar a los perros. Duck Hunt con estilo vaquero.',
        },
        card9:{
          title: 'SAB "Mi Beca" ',
          description: 'Desarrollo y mantenimiento del sistema "Mi beca" empleado por Facultad de Ciencias Exactas Químicas y Naturales de la Universidad Nacional de Misiones.',
        }
      },
      work: {
        title: "Experiencia laboral",
        experience1:{
          title:"a"
        }
      
      },
      conferences: {
        title: "Conferencias",
        conference1:{
          title:"a"
        }
      },
      volunteer: {
        title: "Voluntariado",
        volunteer1:{
          title:"a"
        }
      },
      articles: {
        in: "en",
        of: "de"
      },
      interface: {
        download: "Descargar",
        show: "Ver"
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