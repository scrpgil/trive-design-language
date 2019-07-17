import { Component, Element, State, h } from '@stencil/core';
import copy from 'copy-text-to-clipboard';

@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.css'
})
export class LandingPage {
  @Element() el!: Element;

  @State() isCopied = false;

  constructor() {
    document.title = `ComponentLibrary`;
  }

  copyCommand = () => {
    copy('copy me!');
    this.isCopied = true;
    setTimeout(() => this.isCopied = false, 1500);
  }

  render() {
    return (
      <div>
        <div class="hero container">
          <hgroup>
            <h1>ComponentLibrary Template </h1>
            <p>It is a template for building component libraries quickly..</p>
            <stencil-route-link anchorClass="btn btn--primary" url="/docs/introduction">What is this?</stencil-route-link>
          </hgroup>
          <svg width="661" height="573" viewBox="0 0 661 573" fill="none" xmlns="http://www.w3.org/2000/svg">
          </svg>
        </div>

        <div class="companies">
          <div class="container">
            <h3>Powering design systems and cross-framework components at</h3>
            <ul>
              <li>
                LOGO1
              </li>
              <li>
                LOGO2
              </li>
              <li>
                LOGO3
              </li>
              <li>
                LOGO4
              </li>
              <li>
                LOGO5
              </li>
            </ul>
          </div>
        </div>

        <section class="overview">
          <div class="container">
            <div class="two-col">
              <hgroup>
                <h2><strong>The magical, reusable web component compiler.</strong> Start building in seconds.</h2>
              </hgroup>

              <ul class="list--unstyled list--icon">
                <li><app-icon name="checkmark"/> Web Component-based</li>
                <li><app-icon name="checkmark"/> Asynchronous rendering pipeline</li>
                <li><app-icon name="checkmark"/> TypeScript support</li>
                <li><app-icon name="checkmark"/> One-way Data Binding</li>
                <li><app-icon name="checkmark"/> Component pre-rendering</li>
                <li><app-icon name="checkmark"/> Simple component lazy-loading</li>
                <li><app-icon name="checkmark"/> JSX support</li>
                <li><app-icon name="checkmark"/> Dependency-free components</li>
              </ul>
            </div>
          </div>

          <div class="cta">
            <div class="cta__primary">
              <h3>Getting started is simple:</h3>
              <code class={{'copied': this.isCopied}} onClick={this.copyCommand}>{this.isCopied ? 'copied!' : '$ copy me!'}</code>
              <span>Requires <stencil-route-link url="/docs/getting-started">NPM v6</stencil-route-link></span>
            </div>
            <p class="cta__secondary">Dive deeper with our <stencil-route-link url="/docs/introduction">Getting Started</stencil-route-link> guide</p>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="two-col">
              <hgroup>
                <h2><strong>Awesome developer experience</strong> out of the box.</h2>
              </hgroup>
              <div>
                <ul class="list--icon list--unstyled">
                  <li><app-icon name="checkmark"/> Built-in dev-server for hot module reloading</li>
                  <li><app-icon name="checkmark"/> Screenshot visual UI diffs</li>
                  <li><app-icon name="checkmark"/> Auto-generate component documentation <br/><span class="small">(including css variables)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
