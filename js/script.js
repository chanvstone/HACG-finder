var app=Vue.createApp({
    data(){
        return {
            magnet:"magnet:?xt=urn:btih:",
            content:"",
            links:[]
        }
    },
    methods:{
        clearText(){
            this.content="";
        },
        clearResult(){
            this.links=[];
        },
        make(){
            let code=/[0-9a-zA-Z]{32,64}/.exec(this.content);
            for(let i=0;i<code.length;++i){
                this.links.push(this.magnet+code[i]);
            }
        },
        copy(click){
            click.target.select();
            document.execCommand("copy");
        }
    }
});

var vm=app.mount("div#app");