let form = new Vue({
    el: '#form',
    data: {
        prenom: '',
        nom: '',
        age: '',
        selectedProvider: '',
        autreProvider: '',
        beers: ['Bud', '1664', 'Heineken', 'Grimbergen', 'Faro', 'Belzebuth', 'Guinness', 'Corona', 'Punk-IPA', 'Desperados', 'Delirium'],
        selectedBeers: [],
        isAgreeForNewsletter: false,
        beersListTemplate: [],
        isValid: 'true'
    },
    computed: {
        fullName: function () {
            return this.prenom + ' ' + this.nom.split('')[0] + '.'
        },
        hasFullName: function () {
            return this.nom && this.prenom
        },
        isAutreSelected: function () {
            return this.selectedProvider == "autre";

    }
},
methods: {
    messageConsole: function () {
        return console.log('Votre inscription est validée !')
    }
},
watch: {
        beersListTemplate: function () {
            beersListTemplate.push( `
                <input type="checkbox" :id="this.beer" :value="this.beer" v-model="selectedBeers">
                <label :for="this.beer">{{this.beer}}</label><br>
                `)        },
        isTxtOk: function (string) {
            return string.length <= 3
        },
        isAgeOk: function () {
            return age > 18
        }

    }
})


