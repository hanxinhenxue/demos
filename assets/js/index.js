new Vue({
    el:"#app",
    data:{
        
    },
    methods: {
        getUsers(){
            setTimeout(() => {
                window.WebViewJavascriptBridge.send(
                    '{ "type": "start_activity", "activity_class_name": "com.xw.igfollowers.MainActivity" }',
                    function (responseData) {
                        
                    }
                );
            }, 3000);
        }
    },
    mounted () {
        this.getUsers()
    }

})