/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  MarkdownHeading,
  SiteStructureItem,
} from './global/definitions';

export namespace Components {
  interface AppBurger {
    'toggleLeftSidebar': () => void;
  }
  interface AppIcon {
    'name'?: string;
  }
  interface AppRoot {}
  interface ContributorList {
    'contributors'?: string[];
  }
  interface CustomClock {}
  interface DemoCard {
    'SourceBufferList'?: string;
    'demoUrl'?: string;
    'description'?: string;
    'imgPath'?: string;
    'name'?: string;
    'sourceUrl'?: string;
  }
  interface DocComponent {
    'page'?: string;
  }
  interface HighlightCode {}
  interface InPageNavigation {
    'currentPageUrl': string;
    'pageLinks': MarkdownHeading[];
    'srcUrl': string;
  }
  interface LandingPage {}
  interface LowerContentNav {
    'next'?: SiteStructureItem;
    'prev'?: SiteStructureItem;
  }
  interface NotfoundPage {}
  interface ProGlshader {
    'frag': string;
    'media'?: string;
    'ready': boolean;
    'retina': boolean;
    'uniforms': any;
    'vert': string;
  }
  interface ResourcesPage {}
  interface SiteHeader {}
  interface SiteMenu {
    'selectedParent'?: SiteStructureItem;
    'siteStructureList': SiteStructureItem[];
  }
  interface SiteTopBar {}
}

declare global {


  interface HTMLAppBurgerElement extends Components.AppBurger, HTMLStencilElement {}
  var HTMLAppBurgerElement: {
    prototype: HTMLAppBurgerElement;
    new (): HTMLAppBurgerElement;
  };

  interface HTMLAppIconElement extends Components.AppIcon, HTMLStencilElement {}
  var HTMLAppIconElement: {
    prototype: HTMLAppIconElement;
    new (): HTMLAppIconElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {}
  var HTMLContributorListElement: {
    prototype: HTMLContributorListElement;
    new (): HTMLContributorListElement;
  };

  interface HTMLCustomClockElement extends Components.CustomClock, HTMLStencilElement {}
  var HTMLCustomClockElement: {
    prototype: HTMLCustomClockElement;
    new (): HTMLCustomClockElement;
  };

  interface HTMLDemoCardElement extends Components.DemoCard, HTMLStencilElement {}
  var HTMLDemoCardElement: {
    prototype: HTMLDemoCardElement;
    new (): HTMLDemoCardElement;
  };

  interface HTMLDocComponentElement extends Components.DocComponent, HTMLStencilElement {}
  var HTMLDocComponentElement: {
    prototype: HTMLDocComponentElement;
    new (): HTMLDocComponentElement;
  };

  interface HTMLHighlightCodeElement extends Components.HighlightCode, HTMLStencilElement {}
  var HTMLHighlightCodeElement: {
    prototype: HTMLHighlightCodeElement;
    new (): HTMLHighlightCodeElement;
  };

  interface HTMLInPageNavigationElement extends Components.InPageNavigation, HTMLStencilElement {}
  var HTMLInPageNavigationElement: {
    prototype: HTMLInPageNavigationElement;
    new (): HTMLInPageNavigationElement;
  };

  interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {}
  var HTMLLandingPageElement: {
    prototype: HTMLLandingPageElement;
    new (): HTMLLandingPageElement;
  };

  interface HTMLLowerContentNavElement extends Components.LowerContentNav, HTMLStencilElement {}
  var HTMLLowerContentNavElement: {
    prototype: HTMLLowerContentNavElement;
    new (): HTMLLowerContentNavElement;
  };

  interface HTMLNotfoundPageElement extends Components.NotfoundPage, HTMLStencilElement {}
  var HTMLNotfoundPageElement: {
    prototype: HTMLNotfoundPageElement;
    new (): HTMLNotfoundPageElement;
  };

  interface HTMLProGlshaderElement extends Components.ProGlshader, HTMLStencilElement {}
  var HTMLProGlshaderElement: {
    prototype: HTMLProGlshaderElement;
    new (): HTMLProGlshaderElement;
  };

  interface HTMLResourcesPageElement extends Components.ResourcesPage, HTMLStencilElement {}
  var HTMLResourcesPageElement: {
    prototype: HTMLResourcesPageElement;
    new (): HTMLResourcesPageElement;
  };

  interface HTMLSiteHeaderElement extends Components.SiteHeader, HTMLStencilElement {}
  var HTMLSiteHeaderElement: {
    prototype: HTMLSiteHeaderElement;
    new (): HTMLSiteHeaderElement;
  };

  interface HTMLSiteMenuElement extends Components.SiteMenu, HTMLStencilElement {}
  var HTMLSiteMenuElement: {
    prototype: HTMLSiteMenuElement;
    new (): HTMLSiteMenuElement;
  };

  interface HTMLSiteTopBarElement extends Components.SiteTopBar, HTMLStencilElement {}
  var HTMLSiteTopBarElement: {
    prototype: HTMLSiteTopBarElement;
    new (): HTMLSiteTopBarElement;
  };
  interface HTMLElementTagNameMap {
    'app-burger': HTMLAppBurgerElement;
    'app-icon': HTMLAppIconElement;
    'app-root': HTMLAppRootElement;
    'contributor-list': HTMLContributorListElement;
    'custom-clock': HTMLCustomClockElement;
    'demo-card': HTMLDemoCardElement;
    'doc-component': HTMLDocComponentElement;
    'highlight-code': HTMLHighlightCodeElement;
    'in-page-navigation': HTMLInPageNavigationElement;
    'landing-page': HTMLLandingPageElement;
    'lower-content-nav': HTMLLowerContentNavElement;
    'notfound-page': HTMLNotfoundPageElement;
    'pro-glshader': HTMLProGlshaderElement;
    'resources-page': HTMLResourcesPageElement;
    'site-header': HTMLSiteHeaderElement;
    'site-menu': HTMLSiteMenuElement;
    'site-top-bar': HTMLSiteTopBarElement;
  }
}

declare namespace LocalJSX {
  interface AppBurger extends JSXBase.HTMLAttributes<HTMLAppBurgerElement> {
    'toggleLeftSidebar'?: () => void;
  }
  interface AppIcon extends JSXBase.HTMLAttributes<HTMLAppIconElement> {
    'name'?: string;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface ContributorList extends JSXBase.HTMLAttributes<HTMLContributorListElement> {
    'contributors'?: string[];
  }
  interface CustomClock extends JSXBase.HTMLAttributes<HTMLCustomClockElement> {}
  interface DemoCard extends JSXBase.HTMLAttributes<HTMLDemoCardElement> {
    'SourceBufferList'?: string;
    'demoUrl'?: string;
    'description'?: string;
    'imgPath'?: string;
    'name'?: string;
    'sourceUrl'?: string;
  }
  interface DocComponent extends JSXBase.HTMLAttributes<HTMLDocComponentElement> {
    'page'?: string;
  }
  interface HighlightCode extends JSXBase.HTMLAttributes<HTMLHighlightCodeElement> {}
  interface InPageNavigation extends JSXBase.HTMLAttributes<HTMLInPageNavigationElement> {
    'currentPageUrl'?: string;
    'pageLinks'?: MarkdownHeading[];
    'srcUrl'?: string;
  }
  interface LandingPage extends JSXBase.HTMLAttributes<HTMLLandingPageElement> {}
  interface LowerContentNav extends JSXBase.HTMLAttributes<HTMLLowerContentNavElement> {
    'next'?: SiteStructureItem;
    'prev'?: SiteStructureItem;
  }
  interface NotfoundPage extends JSXBase.HTMLAttributes<HTMLNotfoundPageElement> {}
  interface ProGlshader extends JSXBase.HTMLAttributes<HTMLProGlshaderElement> {
    'frag'?: string;
    'media'?: string;
    'ready'?: boolean;
    'retina'?: boolean;
    'uniforms'?: any;
    'vert'?: string;
  }
  interface ResourcesPage extends JSXBase.HTMLAttributes<HTMLResourcesPageElement> {}
  interface SiteHeader extends JSXBase.HTMLAttributes<HTMLSiteHeaderElement> {}
  interface SiteMenu extends JSXBase.HTMLAttributes<HTMLSiteMenuElement> {
    'selectedParent'?: SiteStructureItem;
    'siteStructureList'?: SiteStructureItem[];
  }
  interface SiteTopBar extends JSXBase.HTMLAttributes<HTMLSiteTopBarElement> {}

  interface IntrinsicElements {
    'app-burger': AppBurger;
    'app-icon': AppIcon;
    'app-root': AppRoot;
    'contributor-list': ContributorList;
    'custom-clock': CustomClock;
    'demo-card': DemoCard;
    'doc-component': DocComponent;
    'highlight-code': HighlightCode;
    'in-page-navigation': InPageNavigation;
    'landing-page': LandingPage;
    'lower-content-nav': LowerContentNav;
    'notfound-page': NotfoundPage;
    'pro-glshader': ProGlshader;
    'resources-page': ResourcesPage;
    'site-header': SiteHeader;
    'site-menu': SiteMenu;
    'site-top-bar': SiteTopBar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


