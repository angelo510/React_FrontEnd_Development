import React from 'react';
import { Field, reduxForm } from 'redux-form'
import ReactLadda, { SLIDE_UP } from 'react-ladda'
import Text from '../../../containers/Text'
import UpdatePassword from '../../../containers/Modals/UpdatePasswordContainer'
import CardDialog from '../../../components/Modals/Payment/CardDialog'

// TODO onChange is not updating correctly, FIX!
// TODO pass proper selectCard action to CardDialog

class EditInformation extends React.Component {
  constructor (props) {
    super (props)
    this.showUpdatePasswordModal = this.showUpdatePasswordModal.bind(this)
  }

  componentDidMount () {
    this.handleInitialize();
  }

  showUpdatePasswordModal (e) {
    const { show } = this.props
    show('updatepassword');
    e.preventDefault();
  }

  handleInitialize () {
    const initData = {
      "first_name": this.props.user.first_name,
      "last_name": this.props.user.last_name,
      "email": this.props.user.email,
      "phone_number": this.props.user.phone_number,
      "street_address": this.props.user.street_address,
      "zipcode": this.props.user.zipcode,
      "city": this.props.user.city,
    }
    this.props.initialize(initData)
  }

  render() {
    const { formSubmitting, handleSubmit, pristine, submitting, isEditingProfile, addCard, cards, getCards, loaded, onCardAdd, selectCard, selectedCard, user } = this.props

    return (
      <div className='edit-information max-width'>
        <UpdatePassword/>
        <form onSubmit={handleSubmit}>
          <div className='color-bg-white pas pam-tablet pal-desktop mbl'>
            <div className='edit-information__section'>
              <h4 className='edit-information__section-title'>
                <Text text='pages.profile.edit_form.title' />
              </h4>
            </div>

            <div className='flex-row flex-col-mobile'>
              <Field type='text'
                     name='first_name'
                     className='input-text flex'
                     placeholder='Etunimi'
                     component="input"
              />
              <Field type='text'
                     name='last_name'
                     className='input-text flex'
                     placeholder='Sukunimi'
                     component="input"
              />
            </div>

            <div className='flex-row flex-col-mobile'>
              <Field type='email'
                     className='input-text flex'
                     name='email'
                     placeholder='Sähköposti'
                     component="input"
              />
              <Field type='text'
                     className='input-text flex'
                     name='phone_number'
                     placeholder='Puhelin'
                     component="input"
              />
            </div>

            <div className='flex-row flex-col-mobile'>
              <Field type='text'
                     className='input-text flex'
                     name='street_address'
                     placeholder='Katuosoite'
                     component="input"
              />
              <Field type='text'
                     className='input-text flex'
                     name='zipcode'
                     placeholder='Postinumero'
                     component="input"
              />
            </div>

            <div className='flex-row flex-col-mobile'>
              <Field type='text'
                     name='city'
                     className='input-text flex'
                     placeholder='Kaupunki'
                     component="input"
              />
              <div className='flex ptm mht'>
                <button className='pl-btn-grey mtt'
                  style={ {position: 'relative', top: '-27px'} }
                  onClick={this.showUpdatePasswordModal}>
                  <i className='fa fa-plus'/> <Text text='pages.profile.edit_form.change_password' />
                </button>
              </div>
            </div>

            <div className='mtm'>
              <div className='edit-information__section'>
                <h4 className='edit-information__section-title'>
                  <Text text='pages.profile.edit_form.payment_title' />
                </h4>
              </div>
                <div className='flex'>
                 <CardDialog
                    addCard={addCard}
                    cards={cards}
                    getCards={getCards}
                    isProfile
                    loaded={loaded}
                    onCardAdd={onCardAdd}
                    selectCard={selectCard}
                    selectedCard={selectedCard}
                    user={user} />
                    {loaded && <i className='fa fa-refresh fa-spin fa-1x fa-fw' style={{width: '100%'}}/> }
                </div>
            </div>
          </div>

          <div className='flex-row flex-hc'>
            {formSubmitting
              ? <i className='fa fa-refresh fa-spin fa-1x fa-fw'/>
              : <ReactLadda
                type="submit"
                className="pl-btn-primary"
                disabled={pristine || submitting}
                data-style={SLIDE_UP}
                loading={isEditingProfile}>
                <Text text='pages.profile.edit_form.save' />
              </ReactLadda>
            }
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'editinformation'  // a unique identifier for this form
})(EditInformation)
