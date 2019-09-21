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
                    <div class="title">Color</div>
                    <div class="color-wrapper">
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
                    <div class="title">Size</div>
                    <div class="size-wrapper">
                        <div class="item">
                            <td-button size="large">Buttton</td-button>
                        </div>
                        <div class="item">
                            <td-button size="small">Buttton</td-button>
                        </div>
                    </div>
                    <div class="title">Fill</div>
                    <div class="fill-wrapper">
                        <div class="item">
                            <td-button fill="outline">Buttton</td-button>
                        </div>
                        <div class="item">
                            <td-button fill="clear">Buttton</td-button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
