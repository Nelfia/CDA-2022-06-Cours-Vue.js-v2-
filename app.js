var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        isActive: true,
        errorClass: 'Not Active !'
    }, 
    computed: {
        classObject: function () {
            return { active: this.isActive && !this.errorClass}
        },
        objectStyle: function () {
            return {
                color: this.isActive ? 'green' : "red",
                backgroundColor: this.isActive ? '#a8c4a824' : '#f443361f',
                padding: "0.7rem 1rem",
                borderRadius: "8px"
            }
        }
    }
})


