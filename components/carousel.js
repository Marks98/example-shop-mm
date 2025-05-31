const Carousel = Vue.defineComponent = ({
    data(){
        return {
            values: [
                {
                    image: 'images/banner_1.png',
                    text: 'NEXT LIMITED EDITION<br> MAY 2025'
                },
                {
                    image: 'images/banner_2.png',
                    text: 'Lorem ipsum dolor sit amet,<br> consectetuer'
                }
            ],
            index: 0,
            timer: null,
        }
    },
    mounted(){
        this.timer = setTimeout(() => this.autoChangeSlide(), 9000);
    },
    computed: {
        imageUrl(){
            return 'bg-[url(' + this.values[this.index].image + ')] bg-center grayscale bg-cover bg-no-repeat ';
        }
    },
    methods: {
        changeSlide(id){
            this.index = id;
            clearTimeout(this.timer);
            this.timer = setTimeout(() => this.autoChangeSlide(), 9000);
        },
        autoChangeSlide(){
            if(this.index + 1 == this.values.length){
                this.index = 0;
            }else{
                this.index ++;
            }

            this.timer = setTimeout(() => this.autoChangeSlide(), 9000);
        }
    },
    template: `
        <div class="w-full px-[60px] h-[400px]" :class="this.imageUrl">
            <div class="container mx-auto flex items-center justify-center lg:justify-end flex-col gap-10 py-16 h-full">
                <h1 class="text-white text-[48px] lg:text-[64px] montserrat-800 text-center w-full flex justify-center" v-html="values[index].text"></h1>
                <div class="hidden sm:flex items-center gap-4">
                    <i class="fas fa-circle cursor-pointer"
                    v-for="value,id in values"
                    :class="{'text-black': id == this.index, 'text-gray-600': id != this.index}"
                    @click="changeSlide(id)"
                    ></i>
                </div>
            </div>
        </div>
    `
});