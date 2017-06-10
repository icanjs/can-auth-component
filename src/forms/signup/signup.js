import Component from 'can-component'
import FormBaseViewModel from '../form-base-vm'
import view from './signup.stache'
import '../forms.less'

export const ViewModel = FormBaseViewModel.extend({
  /**
   * `formName` is only used for logging.
   */
  formName: {
    value: 'SignupForm'
  },

  /**
   * `buttonText` is the action text inside the main button.
   */
  buttonText: {
    value: 'Sign Up'
  }
})

export default Component.extend({
  tag: 'signup-form',
  ViewModel,
  view
})
