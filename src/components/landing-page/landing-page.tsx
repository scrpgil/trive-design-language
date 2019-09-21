import {Component, Element, State, h} from '@stencil/core';
import copy from 'copy-text-to-clipboard';

@Component({
    tag: 'landing-page',
    styleUrl: 'landing-page.css',
})
export class LandingPage {
    @Element() el!: Element;

    @State() isCopied = false;

    constructor() {
        document.title = `TRIVE Design Language`;
    }

    copyCommand = () => {
        copy('npm install @scrpgil/trive-uikit');
        this.isCopied = true;
        setTimeout(() => (this.isCopied = false), 1500);
    };

    render() {
        return (
            <div>
                <div class="hero container">
                    <hgroup>
                        <h1>TRIVE Design Language</h1>
                        <p />
                        <stencil-route-link anchorClass="btn btn--primary" url="/docs/introduction">
                            What is this?
                        </stencil-route-link>
                    </hgroup>
                    <img src="/assets/img/symbol-color.svg" width="401" />
                </div>

          {/*
                <div class="companies">
                    <div class="container">
                        <h3>構成要素</h3>
                        <ul>
                            <li>
                                <div class="td-card">
                                    <div class="td-card-title">デザイン原則</div>
                                    <p class="td-card-content">
                                        TRIVE Design Languageのデザイン原則です。
                                    </p>
                                    <div class="td-card-footer">
                                        <stencil-route-link
                                            anchorClass="btn btn--small btn--main-black"
                                            url="/docs/introduction">
                                            詳細を見る
                                        </stencil-route-link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="td-card">
                                    <div class="td-card-title">スタイルガイド</div>
                                    <p class="td-card-content">
                                        カラー、フォントサイズなどスタイルに対するガイドラインです。
                                        ここを読めばTDLのスタイルについて理解できます。
                                    </p>
                                    <div class="td-card-footer">
                                        <stencil-route-link
                                            anchorClass="btn btn--small btn--main-black"
                                            url="/docs/introduction">
                                            詳細を見る>
                                        </stencil-route-link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="td-card">
                                    <div class="td-card-title">コンポーネント</div>
                                    <p class="td-card-content">
                                        開発効率化のためにコンポーネントを提供しています。
                                    </p>
                                    <div class="td-card-footer">
                                        <stencil-route-link
                                            anchorClass="btn btn--small btn--main-black"
                                            url="/docs/introduction">
                                            詳細を見る>
                                        </stencil-route-link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
          */}

                <section class="overview">
                    <div class="cta">
                        <div class="cta__primary">
                            <h3>TRIVE Design Languageを始める:</h3>
                            <code class={{copied: this.isCopied}} onClick={this.copyCommand}>
                                {this.isCopied ? 'copied!' : '$ npm install @scrpgil/trive-uikit'}
                            </code>
                            <span>
                                Requires{' '}
                                <stencil-route-link url="/docs/getting-started">
                                    NPM v6
                                </stencil-route-link>
                            </span>
                        </div>
                        <p class="cta__secondary">
                            Dive deeper with our{' '}
                            <stencil-route-link url="/docs/introduction">
                                Getting Started
                            </stencil-route-link>{' '}
                            guide
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}
