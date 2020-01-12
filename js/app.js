const messages = {
  en: {
    message: {
      hello: 'hello world',
      title: 'Professor & Game Designer'
    }
  },
  es: {
    message: {
      hello: 'こんにちは、世界',
      title: 'Profesor y diseñador de videojuegos'
    }
  }
}

const i18n = new VueI18n({
  locale: 'es', // set locale
  messages, // set locale messages
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
        console.log(this.fcards);
      },
      hide_card: function(index){
        this.$set(this.fcards, index, false)
      }
    }
})