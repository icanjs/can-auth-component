import Component from 'can-component';
import view from './yahoo.stache';
import {ViewModel as BaseViewModel} from '../button';
import svg from './yahoo.svg';

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'Twitter'
  },
  url: {
    type: 'string',
    value: '/auth/yahoo'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
});

export default Component.extend({
  tag: 'yahoo-auth-button',
  ViewModel,
  view
});

