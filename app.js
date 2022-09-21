let totaux = Vue.component('totaux-item', {
    props: {
        'lines': Array,
        required: true
    },
    data() {
        return {
            totaux: {
                "ht": {
                    name: 'totalHT',
                    value: 0
                },
                "tva": {
                    name: 'totalTVA',
                    value: 0
                },
                "ttc": {
                    name: 'totalTTC',
                    value: 0
                },
            }    
        }
    },
    watch: {
        lines: {
            handler: function() {
                this.totaux.ht.value = 0
                this.totaux.tva.value = 0
                this.lines.forEach((line) => {
                    this.totaux.ht.value += line.total
                    this.totaux.tva.value += line.tva * line.total
                    this.totaux.ttc.value = this.totaux.ht.value + this.totaux.tva.value
                });
            },
            deep: true
        }},
    template: `  
        <div>
            <table>
                <tr v-for="total in totaux">
                    <td>{{ total.name }}</td>
                    <td>{{ total.value }}</td>
                </tr>
            </table>
        </div>    
    `
})

let client = Vue.component('client-infos', {
    data(){
        return {
            text: 'hello',
            nomClient: "",
            prenomClient: "",
            adresseClient: "",
            cpClient: 0,
            villeClient: "",
            telClient : 0
        }
    },
    template: `
        <div>
            <table>
                <tr>
                    <td>Nom</td>
                    <td>
                        <input type="text" v-model="nomClient"> 
                    </td>
                    <td>{{ nomClient }}</td>
                </tr>
                <tr>
                    <td>Prénom</td>
                    <td>
                        <input type="text" v-model="prenomClient"> 
                    </td>
                    <td>{{ prenomClient }}</td>
                </tr>
                <tr>
                    <td>Adresse</td>
                    <td>
                        <input type="text" v-model="adresseClient"> 
                    </td>
                    <td>{{ adresseClient }}</td>
                </tr>
                <tr>
                    <td>Code Postal</td>
                    <td>
                        <input type="number" v-model="cpClient"> 
                    </td>
                    <td>{{ cpClient }}</td>
                </tr>
                <tr>
                    <td>Ville</td>
                    <td>
                        <input type="text" v-model="villeClient"> 
                    </td>
                    <td>{{ villeClient }}</td>
                </tr>
                <tr>
                    <td>Téléphone</td>
                    <td>
                        <input type="number" v-model="telClient"> 
                    </td>
                    <td>{{ telClient }}</td>
                </tr>
            
            </table>
        </div>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        lines: [],
        defaultLine: {
            'ref': '',
            'description': '',
            'quantity': 1,
            'price': 0,
            'tva': null,
            'total': 0
        },
        billNumber: "F2003002458"

    },
    created: function () {
        this.addLine();
    },
    methods: {
        addLine: function () {
            this.lines.push(Object.assign({}, this.defaultLine))
        },
        removeLine: function (index) {
            this.lines.splice(index, 1)
        }
    },
    watch: {
        lines: {
            handler: function () {
                this.lines.forEach(function (line) {
                    line.total = line.price * line.quantity;
                });
            },
            deep: true
        }

    }
})