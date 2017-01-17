import React, { PropTypes } from 'react'
import Select2 from 'react-select2-wrapper'

// TODO: Support am/pm
const template = data => {
  const time = data.text
  const hours = time.length > 3 ? time.substring(0, 2) : `0${time[0]}`
  const minutes = time.substring(time.length - 2)

  return `<span class='select-num'>${hours}:${minutes}</span>`
}

const FormFieldTime = ({timetable, param}) =>
  <div className='time-select'>
    <Select2 data={timetable}
             name='time'
             options={{
               minimumResultsForSearch: 'Infinity',
               escapeMarkup: markup => markup,
               templateSelection: template,
               templateResult: template
             }}
             value={param || '1700'}
             style={{width: '100%'}}/>
  </div>


FormFieldTime.propTypes = {
  timetable: PropTypes.arrayOf(
    PropTypes.number
  ).isRequired,
  param: PropTypes.string
};

export default FormFieldTime
