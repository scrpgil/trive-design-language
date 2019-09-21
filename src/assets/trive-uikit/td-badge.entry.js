import { r as registerInstance, h } from './core-74490a1b.js';

const Badge = class {
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
        return (h("span", { style: this.setColor() }, h("slot", null)));
    }
    static get style() { return "span {\n  border-radius: 8px;\n  font-size: 11px;\n  padding: 4px 8px;\n}"; }
};

export { Badge as td_badge };
