import { r as registerInstance, h, H as Host } from './core-74490a1b.js';

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    setColor() {
        return {
            backgroundColor: `var(--td-color-${this.color})`,
            color: `var(--td-color-${this.color}-contrast)`
        };
    }
    render() {
        return (h(Host, null, h("button", { style: this.setColor() }, h("slot", null))));
    }
    static get style() { return "button {\n  border-radius: 8px;\n  border: solid var(--td-color-border) 1px;\n  font-size: 14px;\n  padding: 9px 60px;\n  outline: none;\n}"; }
};

export { Button as td_button };
