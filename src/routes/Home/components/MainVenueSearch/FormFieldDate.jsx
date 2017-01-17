import React, { PropTypes, Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
/*
  Has to be a component class to avoid pollutation in state.
  This component is unable to update itself, and needsa a 'onChange' method.
  https://github.com/Hacker0x01/react-datepicker
  ~ m.sorja
*/


class SearchField_Date extends Component {
  constructor(props) {
    super(props);
    const selected = props.selected ? moment(props.selected, 'DD/MM/YYYY') : moment();
    this.state = { selected };
  }

  onChange = selected => {
    this.setState({
      selected
    });
  }

  render() {
    const { locale } = this.props
    const { selected } = this.state

    return (
      <div>
        <DatePicker dateFormat='DD/MM/YYYY'
                    locale={locale}
                    maxDate={moment().add(14, 'days')}
                    minDate={moment()}
                    name='date'
                    onChange={this.onChange}
                    peekNextMonth={true}
                    selected={selected}/>
      </div>
    )
  }
}


SearchField_Date.propTypes = {
  locale: PropTypes.string.isRequired
};

export default SearchField_Date
