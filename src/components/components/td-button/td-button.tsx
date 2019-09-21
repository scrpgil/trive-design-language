import {Component, h} from '@stencil/core';

@Component({
    tag: 'td-button-page',
    styleUrl: 'td-button.css',
})
export class ButtonPage {
    render() {
        return (
            <section>
                <div class="components">
                    <div class="item">
                        <td-button color="main">Buttton</td-button>
                    </div>
                    <div class="item">
                        <td-button color="main-black">Buttton</td-button>
                    </div>
                    <div class="item">
                        <td-button color="sub-black">Buttton</td-button>
                    </div>
                    <div class="item">
                        <td-button color="bg">Buttton</td-button>
                    </div>
                    <div class="item">
                        <td-button color="light">Buttton</td-button>
                    </div>
                    <div class="item">
                        <td-button color="border">Buttton</td-button>
                    </div>
                </div>
            </section>
        );
    }
}
