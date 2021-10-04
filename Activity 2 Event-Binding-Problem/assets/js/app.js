new Vue({
    el: '#events',
    data: {
        output1: '',
        output2: ''
    },
    methods: {
        showAlert() { //functions to the button 'show alert'
            alert('Hi, this is an ALERT!') //this will be the alert, if u click the button 'show alert' this will be executed
        },
        setOutput2(event) { //functions for input 2
            this.output2 = event.target.value
        },
        setOutput1(event) { //functions for input 1
            this.output1 = event.target.value
        }
    }

})
new Vue({
    el: 'h1',
    data: {
        h1: 'Events'
    },
})