import React, { PropTypes } from 'react'
import Select2 from 'react-select2-wrapper'

const template = data => {
  const [num, text] = data.text.split(' ')

  return `<span class='select-num'> ${num} </span><span class='select-one'>${text}</span>`
}

const FormFieldDuration = ({durations, param = 60}) =>
  <div>
    <Select2 name='duration'
             className='form-control'
             style={{width: '100%'}}
             data={durations}
             value={param}
             options={{
               minimumResultsForSearch: 'Infinity',
               escapeMarkup: markup => markup,
               templateResult: template,
               templateSelection: template
             }}/>
  </div>

FormFieldDuration.propTypes = {
  durations: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  param: PropTypes.string
};

export default FormFieldDuration
