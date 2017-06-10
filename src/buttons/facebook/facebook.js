import Component from 'can-component'
import view from './facebook.stache'
import {ViewModel as BaseViewModel} from '../button'
import svg from './facebook.svg'

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'Facebook'
  },
  url: {
    type: 'string',
    value: '/auth/facebook'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
})

export default Component.extend({
  tag: 'facebook-auth-button',
  ViewModel,
  view
})
