import {Component, h} from '@stencil/core';

@Component({
    tag: 'td-card-page',
    styleUrl: 'td-card.css',
})
export class CardPage {
    render() {
        return (
            <section>
                <div class="components">
                    <div class="item">
                        <td-card color="main">Buttton</td-card>
                    </div>
                    <div class="item">
                        <td-card color="main-black">Buttton</td-card>
                    </div>
                    <div class="item">
                        <td-card color="sub-black">Buttton</td-card>
                    </div>
                    <div class="item">
                        <td-card color="bg">Buttton</td-card>
                    </div>
                    <div class="item">
                        <td-card color="light">Buttton</td-card>
                    </div>
                    <div class="item">
                        <td-card color="border">Buttton</td-card>
                    </div>
                </div>
            </section>
        );
    }
}
