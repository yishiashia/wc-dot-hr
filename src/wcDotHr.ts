import hrStyle from "./hr.scss";

export default class DotHr extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (this.shadowRoot !== null) {
      // Style
      const styleElement = document.createElement("style");
      this.shadowRoot.appendChild(styleElement);

      if (this.shadowRoot !== null) {
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(hrStyle);
        this.shadowRoot.adoptedStyleSheets = [sheet];
      }

      // DOM
      if (this.shadowRoot !== null) {
        this.shadowRoot.innerHTML = this.template();
      }
    }
  }

  disconnectedCallback() {}

  template() {
    return "<hr />";
  }
}
