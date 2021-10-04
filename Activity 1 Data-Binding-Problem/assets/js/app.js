new Vue({
    el: '.container',
    data: {
        name: 'John Mark Fungo',
        age: 19,
        imgSrc: 'https://segwitz.com/wp-content/uploads/2021/06/vuejs-development-malaysia.jpeg'
    },
    methods: {
        ageAfter5(num){
            const totalAge = this.age+num
            return totalAge
        },
        favNum(num1, num2){
            const randomNum = Math.random(num1, num2)
            if(randomNum < 0.5){
                return 0
            }else{
                return 1
            }
        }
    },
})