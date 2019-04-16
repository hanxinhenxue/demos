new Vue({
    el:'#golden',
    data:{
        endTime:'2019-05-01',
        prices:[
            {
                num:75,
                discount:'30%',
                price:'9.99'
            },
            {
                num: 5,
                discount: '',
                price: '0.99'
            },
            {
                num: 20,
                discount: '10%',
                price: '2.99'
            },
            {
                num: 30,
                discount: '15%',
                price: '4.99'
            },
            {
                num: 200,
                discount: '50%',
                price: '19.99'
            },
        ],
        coins:[
            {
                num:25,
                price:'500'
            },
            {
                num:10,
                price:'200'
            },
            {
                num:15,
                price:'300'
            },
            {
                num:50,
                price:'1,000'
            },
            {
                num:100,
                price:'2,000'
            },
            {
                num: 200,
                price: '4,000'
            },
            {
                num: 300,
                price: '6,000'
            },
            {
                num: 500,
                price: '10,000'
            }
        ],
        hours:0,
        minutes:0,
        seconds:0
    },
    components: {
        "list-card":{
            template:`<div class="list_container">
                <div class="left_head">
                    <img src="../assets/images/golden/head2.svg">
                </div>
                <div class="right_info">

                    <div class="left_num_or_hot">
                        <div class="num">
                            {{info.num}}
                        </div>
                        <div class="hot" v-if="index == 0">
                            <img src="../assets/images/golden/hot.svg">
                        </div>
                    </div>

                    <div class="right_discount_or_price">
                        <div class="discount" v-if="info.discount">
                            {{info.discount}} OFF
                        </div>
                        <div class="price">
                            $ {{info.price}}
                        </div>
                    </div>
                </div>
            </div>`,
            props:{
                info:{
                    required:true,
                    type:Object
                },
                index: {
                    required: true,
                    type:String
                }
            }
        },
        "coin-card": {
            template: `<div class="list_container">
                <div class="left_head">
                    <img src="../assets/images/golden/head2.svg">
                </div>
                <div class="right_info">

                    <div class="left_num_or_hot">
                        <div class="num">
                            {{info.num}}
                        </div>
                        <div class="hot" v-if="index == 0">
                            <img src="../assets/images/golden/hot.svg">
                        </div>
                    </div>

                    <div class="right_discount_or_price">
                        <div class="price2">
                            {{info.price}}
                            <img src="../assets/images/golden/coin.svg">
                        </div>
                    </div>
                </div>
            </div>`,
            props: {
                info: {
                    required: true,
                    type: Object
                },
                index: {
                    required: true,
                    type: String
                }
            }
        },
    },
    methods: {
        getInterval(){
            let interval = setInterval(() => {
                let date = (new Date(this.endTime)) -(new Date())
                if (date <= 0) {
                    clearInterval(interval)
                } else {
                    let d = parseInt(date / 1000 / 60 / 60 / 24)
                    let h = (parseInt(date / 1000 / 60 % 24) + d * 24).toString().padStart(2,"0")
                    let m = parseInt(date / 1000 / 60 % 60).toString().padStart(2,"0")
                    let s = parseInt(date / 1000 % 60).toString().padStart(2,"0")
                    this.hours = h
                    this.minutes = m
                    this.seconds = s
                }
            }, 1000);
        }
    },
    mounted () {
        this.getInterval()
    }
})