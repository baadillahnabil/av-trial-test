import $ from 'jquery'
import { adjustProgressBar } from '../../methods'

$(document).ready(() => {
  // Check Validation
  $('#fourthStepRadio input[name="fourthStepRadioOption"]').on('change', () => {
    $('#fourthStepRadio input[name="fourthStepRadioOptionNo"]').prop('checked', false)
    isRadioValid()
  })
  $('#fourthStepRadio input[name="fourthStepRadioOptionNo"]').on('change', () => {
    $('#fourthStepRadio input[name="fourthStepRadioOption"]').prop('checked', false)
    isRadioValid()
  })

  // On Continue Button Clicked
  $('#step-4-button-submit').on('click', () => {
    if (!isRadioValid()) return

    $('#eng__step-4').addClass('animated faster fadeOut')
    $('#eng__step-4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#eng__step-4').addClass('d-none')
      $('#eng__step-4').removeClass('animated faster fadeOut')

      $('#eng__step-5').removeClass('d-none')
      $('#eng__step-5').addClass('animated faster fadeIn')
      $('#eng__step-5').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#eng__step-5').removeClass('animated faster fadeIn')
      })
    })

    adjustProgressBar('increase')
  })

  // On Back Button Clicked
  $('#step-4-button-back').on('click', () => {
    $('#eng__step-4').addClass('animated faster fadeOut')
    $('#eng__step-4').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
      $('#eng__step-4').addClass('d-none')
      $('#eng__step-4').removeClass('animated faster fadeOut')

      $('#eng__step-3').removeClass('d-none')
      $('#eng__step-3').addClass('animated faster fadeIn')
      $('#eng__step-3').one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', () => {
        $('#eng__step-3').removeClass('animated faster fadeIn')
      })
    })

    adjustProgressBar('decrease')
  })
})

function isRadioValid() {
  const isSelected =
    $('#fourthStepRadio input[name="fourthStepRadioOption"]:checked').val() !== undefined ||
    $('#fourthStepRadio input[name="fourthStepRadioOptionNo"]:checked').val() !== undefined
  if (!isSelected) {
    $('#fourthStepRadio  .form-radio-item__label').addClass('error-state')
    $('#fourthStepRadio > .step-4__form-info-message').removeClass('invisible')

    return false
  } else {
    $('#fourthStepRadio  .form-radio-item__label').removeClass('error-state')
    $('#fourthStepRadio > .step-4__form-info-message').addClass('invisible')

    return true
  }
}
