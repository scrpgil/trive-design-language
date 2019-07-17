import { Component, h } from '@stencil/core';

@Component({
  tag: 'resources-page',
  styleUrl: 'resources-page.css'
})
export class ResourcesPage {

  constructor() {
    document.title = `Resources`;
  }

  render() {
    return (
      <div class="container">
        <h1 class="headline measure-md">Resources to help you get more out of</h1>

        <section class="measure-lg">
          <h2>Community Articles/Blogs</h2>
          <p>
            Disclaimer: these articles are community-created, and might contain inaccurate, or outdated information and code snippets.
          </p>
        </section>
      </div>
    );
  }
}
