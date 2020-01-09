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
      mainProps: { blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1' }
    }
})