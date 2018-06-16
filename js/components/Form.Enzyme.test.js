import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Form from './Form';
import ErrorMessage from './ErrorMessage.react';
import LoadingButton from './LoadingButton.react';

function setup(currentlySending) {
  let props = {
    course: {}, currentlySending: currentlySending, 
    onSubmit: () => {},
    onChange: () => {}
  };

  return shallow(<Form {...props} />);
}

describe('Form via Enzyme', () => {
  it('renders form and ErrorMessage', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find(<ErrorMessage/>).length).toBe(1);
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Submit');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe(<Loading/>);
  });

  it('sets error message when trying to save empty title', () => {
  
    const wrapper = setup(true);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Please fill out the entire form.');

  });
});
