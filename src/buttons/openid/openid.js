import Component from 'can-component';
import view from './openid.stache';
import {ViewModel as BaseViewModel} from '../button';
import svg from './openid.svg';

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'OpenID'
  },
  url: {
    type: 'string',
    value: '/auth/openid'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
});

export default Component.extend({
  tag: 'openid-auth-button',
  ViewModel,
  view
});

