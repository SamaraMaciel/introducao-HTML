// É necessário conhecimento em estrutura orientada a objetos.

class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"}); //Open indica que ele pode receber alteraçoes de arquivos externos.
        shadow.innerHTML = "<h1>Hello Samara!</h1>";
    }
}

customElements.define("card-news", CardNews);

//OBS: As tags customizadas (components) precisam ter nome composto separado por hífem,
//senão não funciona, precisa ter essa diferenciação das tags padrões.