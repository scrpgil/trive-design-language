import {Component, h} from '@stencil/core';

@Component({
    tag: 'td-page-nation-page',
    styleUrl: 'td-page-nation.css',
})
export class PageNationPage {
    render() {
        return (
            <section>
                <div class="components">
                    <div class="item">
                        <td-page-nation color="main">Buttton</td-page-nation>
                    </div>
                    <div class="item">
                        <td-page-nation color="main-black">Buttton</td-page-nation>
                    </div>
                    <div class="item">
                        <td-page-nation color="sub-black">Buttton</td-page-nation>
                    </div>
                    <div class="item">
                        <td-page-nation color="bg">Buttton</td-page-nation>
                    </div>
                    <div class="item">
                        <td-page-nation color="light">Buttton</td-page-nation>
                    </div>
                    <div class="item">
                        <td-page-nation color="border">Buttton</td-page-nation>
                    </div>
                </div>
            </section>
        );
    }
}
