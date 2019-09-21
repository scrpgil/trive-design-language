import {Component, h} from '@stencil/core';
import copy from 'copy-text-to-clipboard';

@Component({
    tag: 'typography-page',
    styleUrl: 'typography-page.css',
})
export class TypoGraphyPage {
    constructor() {
        document.title = `タイポグラフィ`;
    }

    copyCommand = (text: string) => {
        copy(text);
    };

    render() {
        return (
            <div class="content-wrapper">
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
                    <div class="font-size-wrapper font-english">
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
