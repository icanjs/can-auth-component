import Component from 'can-component';
import view from './paypal.stache';
import {ViewModel as BaseViewModel} from '../button';
import svg from './paypal.svg';

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'PayPal'
  },
  url: {
    type: 'string',
    value: '/auth/paypal'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
});

export default Component.extend({
  tag: 'paypal-auth-button',
  ViewModel,
  view
});

