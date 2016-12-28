import Component from 'can-component';
import view from './google.stache';
import {ViewModel as BaseViewModel} from '../button';
import svg from './google.svg';

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'Google'
  },
  url: {
    type: 'string',
    value: '/auth/google'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
});

export default Component.extend({
  tag: 'google-auth-button',
  ViewModel,
  view
});

