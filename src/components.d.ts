/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ConnectedButton {}
}

declare global {


  interface HTMLConnectedButtonElement extends Components.ConnectedButton, HTMLStencilElement {}
  var HTMLConnectedButtonElement: {
    prototype: HTMLConnectedButtonElement;
    new (): HTMLConnectedButtonElement;
  };
  interface HTMLElementTagNameMap {
    'connected-button': HTMLConnectedButtonElement;
  }
}

declare namespace LocalJSX {
  interface ConnectedButton {}

  interface IntrinsicElements {
    'connected-button': ConnectedButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'connected-button': LocalJSX.ConnectedButton & JSXBase.HTMLAttributes<HTMLConnectedButtonElement>;
    }
  }
}


