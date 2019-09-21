import {Component, h} from '@stencil/core';

@Component({
    tag: 'td-badge-page',
    styleUrl: 'td-badge.css',
})
export class BadgePage {
    render() {
        return (
            <section>
                <div class="components">
                    <div class="text extra-large">
                        Example heading<td-badge color="main">New</td-badge>
                    </div>
                    <div class="text large">
                        Example heading<td-badge color="main">New</td-badge>
                    </div>
                    <div class="text regular">
                        Example heading<td-badge color="main">New</td-badge>
                    </div>
                    <div class="text small">
                        Example heading<td-badge color="main">New</td-badge>
                    </div>
                    <div class="text extra-small">
                        Example heading<td-badge color="main">New</td-badge>
                    </div>
                </div>
            </section>
        );
    }
}
