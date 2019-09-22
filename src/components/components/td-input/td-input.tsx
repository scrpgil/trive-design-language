import {Component, h} from '@stencil/core';

@Component({
    tag: 'td-input-page',
    styleUrl: 'td-input.css',
})
export class InputPage {
    render() {
        return (
            <section>
                <div class="components">
                    <div class="item">
                        <td-input value="input"></td-input>
                    </div>
                    <div class="item">
                        <td-input color="main" value="input"></td-input>
                    </div>
                    <div class="item">
                        <td-input color="success" value="input"></td-input>
                    </div>
                    <div class="item">
                        <td-input color="warning" value="input"></td-input>
                    </div>
                </div>
            </section>
        );
    }
}
