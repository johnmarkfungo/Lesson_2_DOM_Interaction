new Vue ({
  el:'#container',
  data: {
      value: 0,
  },
  watch: {
      value: function(valLimit) {
          if (valLimit >= 37){
              const vueInstance = this
              setTimeout(function() {
                  vueInstance.value = 0
              }, 5000)
          }
      }
  },
  methods: {
      add(num){
          this.value = this.value+num
      },
  },
  computed: {
      
      result: function() {
          if (this.value > 37) {
              return 'Too Much!'
          }else if (this.value === 37 || this.value === 0) {
              return this.value
          }else {
              return 'Not There Yet!'
          }
          return this.value
      }
  },
})
