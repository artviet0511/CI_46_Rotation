class Player extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(document.getElementById("player").content.cloneNode(true));
        this.$img = this._shadowRoot.querySelector("#img");
        this.$name = this._shadowRoot.querySelector("#name");
        this.$point=this._shadowRoot.querySelector("#point");

    }
    static get observedAttributes() {
        return ["img","name","point"];
    }
    set point(newVal){
        return this.setAttribute("point", newVal);
    }
    get point(){
        return this.getAttribute("point");
    }
    render(){
        this.$img.src=this.getAttribute("img");
        this.$name.innerHTML=this.getAttribute("name");
        this.$point.innerHTML=this.point;
    } 
    attributeChangedCallback() {
        this.render();
        
    };
}
window.customElements.define("form-player", Player);