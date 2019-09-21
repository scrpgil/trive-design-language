import {Component, h} from '@stencil/core';
import copy from 'copy-text-to-clipboard';

@Component({
    tag: 'color-page',
    styleUrl: 'color-page.css',
})
export class ColorPage {
    constructor() {
        document.title = `カラー`;
    }

    copyCommand = (text: string) => {
        copy(text);
    };

    render() {
        return (
            <div class="content-wrapper">
                <section>
                    <h2>カラー</h2>
                    <div class="color-wrapper">
                        <div class="color-item">
                            <div class="main" onClick={() => this.copyCommand('#EA4600')}>
                                <div class="color" />
                                <div class="title">Main</div>
                                <div class="hex">#EA4600</div>
                            </div>
                        </div>
                        <div class="color-item">
                            <div class="main-black" onClick={() => this.copyCommand('#3B322E')}>
                                <div class="color" />
                                <div class="title">Black</div>
                                <div class="hex">#3B322E</div>
                            </div>
                        </div>
                        <div class="color-item">
                            <div class="sub-black" onClick={() => this.copyCommand('#')}>
                                <div class="color" />
                                <div class="title">SubBlack</div>
                                <div class="hex">#A6A39A</div>
                            </div>
                        </div>
                        <div class="color-item">
                            <div class="bg">
                                <div class="color" />
                                <div class="title">Background</div>
                                <div class="hex">#F3ECE9</div>
                            </div>
                        </div>
                        <div class="color-item">
                            <div class="light">
                                <div class="color" />
                                <div class="title">Light</div>
                                <div class="hex">#FDF3EE</div>
                            </div>
                        </div>
                        <div class="color-item">
                            <div class="border">
                                <div class="color" />
                                <div class="title">Border</div>
                                <div class="hex">#E6E6E6</div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
