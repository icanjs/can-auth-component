import Component from 'can-component'
import view from './evernote.stache'
import {ViewModel as BaseViewModel} from '../button'
import svg from './evernote.svg'

export const ViewModel = BaseViewModel.extend({
  name: {
    type: 'string',
    value: 'Evernote'
  },
  url: {
    type: 'string',
    value: '/auth/evernote'
  },
  svg: {
    value: svg
  },
  text: 'string',
  popup: 'boolean'
})

export default Component.extend({
  tag: 'evernote-auth-button',
  ViewModel,
  view
})
