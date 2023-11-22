import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";
import DotHr from "../../src/wcDotHr";

// Mock the replaceSync() method
global.CSSStyleSheet.prototype.replaceSync = jest.fn();

describe("wcStarInput.js", () => {
  window.customElements.define("dot-hr", DotHr);

  test("custom elements in JSDOM", () => {
    document.body.innerHTML = `<dot-hr></dot-hr>`;
    const customElement = document.querySelector("dot-hr");
    expect(customElement).not.toBeNull();
    expect(customElement!.shadowRoot).not.toBeNull();
  });
});
