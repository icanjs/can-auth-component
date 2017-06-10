import Component from 'can-component'
import view from './stackoverflow.stache'
import {ViewModel as BaseViewModel} from '../button'
import svg from './stackoverflow.svg'

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'Stack Overflow'
  },
  url: {
    type: 'string',
    value: '/auth/stackoverflow'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
})

export default Component.extend({
  tag: 'stackoverflow-auth-button',
  ViewModel,
  view
})
