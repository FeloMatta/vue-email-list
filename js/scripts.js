const {createApp} = Vue;

createApp({

    data() {

        return{
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails:  []
        };

    },

    methods: {

        generaEmail() {

            for(let i = 0; i < 10; i++){
                axios
                    .get(this.apiUrl)
                    .then((response) => {

                        console.log(i);
                        console.log(response);
                        console.log(response.data);

                        this.emails.push(response.data.response);

                    });

            }
        }

    }

}).mount('#app');
console.log(axios);