let form = new Vue({
    el: '#form',
    data: {
        prenom: '',
        nom: '',
        age: 0
    },
    computed: {
        hasFullName: function () {
            return this.nom && this.prenom
        }
    },
    methods: {
        messageConsole: function () {
            return console.log('OK bien reçu !')
        }
    }
})


