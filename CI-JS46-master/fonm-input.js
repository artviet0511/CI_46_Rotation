class FormInput extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "open" });
        this._shadowRoot.appendChild(document.getElementById("forminput").content.cloneNode(true));
        this.$input = this._shadowRoot.querySelector("#input");
        this.$label = this._shadowRoot.querySelector("#label");
        this.$error = this._shadowRoot.querySelector("#errorMsg");
        this.$container=this._shadowRoot.querySelector("#container");
    }
    static get observedAttributes() {
        return ["name", "type", "label", "error"]
    }
    get value() {
        return this.$input.value;
    }
    set error(newError) {
        this.setAttribute("error", newError)
    }
    get error(){
        return this.getAttribute("error")
    }
    render() {
        this.$input.type = this.getAttribute("type");
        this.$label.innerHTML = this.getAttribute("label");
        if (this.error) {
            this.$error.innerHTML = this.error;
            this.$container.classList.add("error");
        }else{
            this.$error.innerHTML="";
            this.$container.classList.remove("error");
        }
    }
    attributeChangedCallback() {
        this.render();
        
    };

}
window.customElements.define("form-input", FormInput);