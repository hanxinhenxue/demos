new Vue({
    el:"#app",
    data:{
        
    },
    methods: {
        getUsers(){
            window.WebViewJavascriptBridge.send(
                {"type":"echo"},
                function (responseData) {
                    console.log(responseData)
                }
            );
        }
    },
    mounted () {
        this.getUsers()
    }

})