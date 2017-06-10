import Component from 'can-component'
import view from './skype.stache'
import {ViewModel as BaseViewModel} from '../button'
import svg from './skype.svg'

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'Skype'
  },
  url: {
    type: 'string',
    value: '/auth/skype'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
})

export default Component.extend({
  tag: 'skype-auth-button',
  ViewModel,
  view
})
