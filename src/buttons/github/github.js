import Component from 'can-component'
import view from './github.stache'
import {ViewModel as BaseViewModel} from '../button'
import svg from './github.svg'

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'GitHub'
  },
  url: {
    type: 'string',
    value: '/auth/github'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
})

export default Component.extend({
  tag: 'github-auth-button',
  ViewModel,
  view
})
