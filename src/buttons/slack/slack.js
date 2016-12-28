import Component from 'can-component';
import view from './slack.stache';
import {ViewModel as BaseViewModel} from '../button';
import svg from './slack.svg';

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'Slack'
  },
  url: {
    type: 'string',
    value: '/auth/slack'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
});

export default Component.extend({
  tag: 'slack-auth-button',
  ViewModel,
  view
});

