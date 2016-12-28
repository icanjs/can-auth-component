import Component from 'can-component';
import view from './dropbox.stache';
import {ViewModel as BaseViewModel} from '../button';
import svg from './dropbox.svg';

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'Dropbox'
  },
  url: {
    type: 'string',
    value: '/auth/dropbox'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
});

export default Component.extend({
  tag: 'dropbox-auth-button',
  ViewModel,
  view
});

