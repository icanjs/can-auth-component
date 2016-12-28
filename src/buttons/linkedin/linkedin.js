import Component from 'can-component';
import view from './linkedin.stache';
import {ViewModel as BaseViewModel} from '../button';
import svg from './linkedin.svg';

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'LinkedIn'
  },
  url: {
    type: 'string',
    value: '/auth/linkedin'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
});

export default Component.extend({
  tag: 'linkedin-auth-button',
  ViewModel,
  view
});

