import React, { PropTypes } from 'react'
import Select2 from 'react-select2-wrapper'
import Text from '../../../../containers/Text'
import './form-field-sport.css'

// Move to container
const template = (data, sports) => {
  if (data.id) {
    const { id, text } = data
    const currentSport = sports.filter(sport => sport.sport === data.id)[0];
    return `<i class='icon-${currentSport.sport}'></i><span class='select-one'>${Text.t(text)}</span>`
  }
  return `<span class='select-one'>${data.text}</span>`
}

const valueRenderer = (data, sports) => {
  if (data.id) {
    const { id, text } = data
    const currentSport = sports.filter(sport => sport.sport === data.id)[0];
    return `<i class='icon-${currentSport.sport}'></i><span class='select-one'>${Text.t(text)}</span>`
  }
  return `<span class='select-one'>${data.text}</span>`
}

const FormFieldSport = ({ sports, param }) => {
  const modifiedSports = sports.map(sport => ({ id: sport.sport, text: sport.sport }));
  let value;
  if (param && modifiedSports.length) {
    value = modifiedSports.filter(sport => sport.text === param)[0].id;
  } else if (modifiedSports.length) {
    value = modifiedSports[0].id
  }
  return (
    <div>
      <Select2 name='sport_name'
               className='form-control'
               data={modifiedSports}
               options={{
                 minimumResultsForSearch: 'Infinity',
                 escapeMarkup: markup => markup,
                 templateResult: option => template(option, sports),
                 templateSelection: option => valueRenderer(option, sports),
                 placeholder: 'Loading sports'
               }}
               value={value}
               style={{width: '100%'}}/>
    </div>
  )
}

FormFieldSport.propTypes = {
  sports: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired
};

export default FormFieldSport
