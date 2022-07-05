const app = new Vue({
    el : '#app',
    data : {
        index : 0,
        timerZero : '',

        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
    },

    methods : {
        nextSlide(){
            this.index ++;
            if(this.index === this.slides.length){
                this.index=0;
            }
        },
        prevSlide(){
            this.index --;
            if(this.index === -1){
                this.index = this.slides.length-1;
            }
        },
        thumbFirstElement(){
            this.index = 0;
        },
        thumbSecondElement(){
            this.index = 1;
        },
        thumbThirdElement(){
            this.index = 2;
        },
        thumbFourthElement(){
            this.index = 3;
        },
        thumbFifthElement(){
            this.index = 4;
        },
        timer(){
            timerZero = setInterval(()=>{
                this.nextSlide();
            },3000)
        },
        stopTimer(){
            clearInterval(timerInterval);
        },
    },
    created (){
        this.timer();
    }
})






