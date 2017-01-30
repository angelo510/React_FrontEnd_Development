import * as actions from '../../src/actions/auth-actions';
import * as types from '../../src/actions/auth-actions';

describe('auth-actions', () => {
  describe('onLoginSuccess', () => {
    it('has the correct type', () => {
      const action = actions.onLoginSuccess();
      expect(action.type).to.equal(types.LOGIN_SUCCESS);
    });

    it('has the correct payload', () => {
      const action = actions.onLoginSuccess({ name: 'stas', id: 23 });
      expect(action.user).to.deep.equal({ name: 'stas', id: 23 });
    });
  });

  describe('onLoginFail', () => {
    it('has the correct type', () => {
      const action = actions.onLoginFail();
      expect(action.type).to.equal(types.LOGIN_FAIL);
    });

    it('has the correct payload', () => {
      const action = actions.onLoginFail('reason');
      expect(action.reason).to.equal('reason');
    });
  });

  describe('onRegisterFail', () => {
    it('has the correct type', () => {
      const action = actions.onRegisterFail();
      expect(action.type).to.equal(types.REGISTER_FAIL);
    });

    it('has the correct payload', () => {
      const action = actions.onRegisterFail('reason2');
      expect(action.reason).to.equal('reason2');
    });
  });

  describe('onRegisterSuccess', () => {
    it('has the correct type', () => {
      const action = actions.onRegisterSuccess();
      expect(action.type).to.equal(types.REGISTER_SUCCESS);
    });

    it('has the correct payload', () => {
      const action = actions.onRegisterSuccess({ name: 'stas', id: 23 });
      expect(action.user).to.deep.equal({ name: 'stas', id: 23 });
    });
  });

  describe('onLogout', () => {
    it('has the correct type', () => {
      const action = actions.onLogout();
      expect(action.type).to.equal(types.LOG_OUT);
    });
  });

  describe('onChange', () => {
    it('has the correct default type', () => {
      const action = actions.onChange({ target: { name: 'Stas', value: 'Hi' } });
      expect(action.type).to.equal(types.ON_AUTH_INPUT_CHANGE);
    });

    it('has the correct passed type', () => {
      const action = actions.onChange({ target: { name: 'Stas', value: 'Hi' } }, 'Something');
      expect(action.type).to.equal('Something');
    });

    it('has the correct payload', () => {
      const action = actions.onChange({ target: { name: 'Stas', value: 'Hi' } });
      expect(action.input).to.deep.equal({ name: 'Stas', value: 'Hi' });
    });
  });
})
