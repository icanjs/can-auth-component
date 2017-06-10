import Component from 'can-component'
import view from './microsoft.stache'
import {ViewModel as BaseViewModel} from '../button'
import svg from './microsoft.svg'

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'Microsoft'
  },
  url: {
    type: 'string',
    value: '/auth/microsoft'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
})

export default Component.extend({
  tag: 'microsoft-auth-button',
  ViewModel,
  view
})
