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
                    <div class="text u-f-extra-large">
                        Example heading<td-badge>New</td-badge>
                    </div>
                    <div class="text u-f-large">
                        Example heading<td-badge>New</td-badge>
                    </div>
                    <div class="text u-f-regular">
                        Example heading<td-badge>New</td-badge>
                    </div>
                    <div class="text u-f-small">
                        Example heading<td-badge>New</td-badge>
                    </div>
                    <div class="text u-f-extra-small">
                        Example heading<td-badge>New</td-badge>
                    </div>
                </div>
            </section>
        );
    }
}
