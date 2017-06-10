import Component from 'can-component'
import view from './amazon.stache'
import {ViewModel as BaseViewModel} from '../button'
import svg from './amazon.svg'

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'Amazon'
  },
  url: {
    type: 'string',
    value: '/auth/amazon'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
})

export default Component.extend({
  tag: 'amazon-auth-button',
  ViewModel,
  view
})
