import {Component, h} from '@stencil/core';
import copy from 'copy-text-to-clipboard';

@Component({
    tag: 'styleguide-page',
    styleUrl: 'styleguide-page.css',
})
export class StyleGudidePage {
    constructor() {
        document.title = `スタイルガイド`;
    }

    copyCommand = (text: string) => {
        copy(text);
    };

    render() {
        return (
            <div class="container">
                <h1 class="headline">スタイルガイド</h1>
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
                <section>
                    <h2>フォント</h2>
                    <div class="fonts-wrapper">
                        <div class="font-japanese">
                            <div class="title">日本語</div>
                            <div class="font-family">Noto Sans JP</div>
                        </div>
                        <div class="font-english">
                            <div class="title">英数字</div>
                            <div class="font-family">Avenir</div>
                        </div>
                    </div>
                    <div class="font-size-wrapper">
                        <div class="extra-large">
                            <div class="title">extra-large</div>
                            <div class="font-size">TRIVE Design</div>
                        </div>
                        <div class="large">
                            <div class="title">large</div>
                            <div class="font-size">TRIVE Design</div>
                        </div>
                        <div class="regular">
                            <div class="title">regular</div>
                            <div class="font-size">TRIVE Design</div>
                        </div>
                        <div class="small">
                            <div class="title">small</div>
                            <div class="font-size">TRIVE Design</div>
                        </div>
                        <div class="extra-small">
                            <div class="title">extra-small</div>
                            <div class="font-size">TRIVE Design</div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
