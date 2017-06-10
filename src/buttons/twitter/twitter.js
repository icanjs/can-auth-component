import Component from 'can-component'
import view from './twitter.stache'
import {ViewModel as BaseViewModel} from '../button'
import svg from './twitter.svg'

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'Twitter'
  },
  url: {
    type: 'string',
    value: '/auth/twitter'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
})

export default Component.extend({
  tag: 'twitter-auth-button',
  ViewModel,
  view
})
