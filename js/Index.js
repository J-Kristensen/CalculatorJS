Vue.createApp({

    data() {

        return {

           number1 : null,
              number2 : null,
              result: 0,
              operation: null

        }

    },

    methods: {

       math() {

        switch(this.operation) {
                
                case "add":
                    this.add()
                    break;
                case "sub":
                    this.sub()
                    break;
                case "mul":
                    this.mul()
                    break;
                case "div":
                    this.div()
                    break;
          

       }

    },
    add() {
        this.result = this.number1 + this.number2
    },
    sub() {
        this.result = this.number1 - this.number2
    },
    mul() {
        this.result = this.number1 * this.number2
    },
    div() {
        this.result = this.number1 / this.number2
    }

    }


}).mount("#app")