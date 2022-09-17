let vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'John',
        lastName: 'Doe',
    },
    computed: {
        fullName: {
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            set: function(newValue) {
                let names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})


