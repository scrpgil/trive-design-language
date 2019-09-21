import {Component, h} from '@stencil/core';

@Component({
    tag: 'td-form-page',
    styleUrl: 'td-form.css',
})
export class FormPage {
    render() {
        return (
            <section>
                <div class="components">
                    <div class="item">
                        <td-form color="main">Buttton</td-form>
                    </div>
                    <div class="item">
                        <td-form color="main-black">Buttton</td-form>
                    </div>
                    <div class="item">
                        <td-form color="sub-black">Buttton</td-form>
                    </div>
                    <div class="item">
                        <td-form color="bg">Buttton</td-form>
                    </div>
                    <div class="item">
                        <td-form color="light">Buttton</td-form>
                    </div>
                    <div class="item">
                        <td-form color="border">Buttton</td-form>
                    </div>
                </div>
            </section>
        );
    }
}
