import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai, { expect } from 'chai';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
global.localStorage = {
  setItem: () => {}
}
global.StripeCheckout = {
  configure: () => {},
  open: () => {},
}
global.expect = expect;
// export { expect };
