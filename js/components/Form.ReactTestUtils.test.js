import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Form from "./Form.react";
import LoadingButton from './LoadingButton.react';
import ErrorMessage from './ErrorMessage.react';

function setup(currentlySending) {
  let props = {
    course: {}, currentlySending: currentlySending, 
    onSubmit: () => {},
    onChange: () => {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<Form {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Form via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
    let [ ErrorMessage ] = output.props.children;
    expect(ErrorMessage.type).toBe(ErrorMessage);
  });

  it('Submit button is labeled "submit" when not saving', () => {
    const { output } = setup(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('submit');
  });

  it('Submit button is labeled "Loading..." when submitting', () => {
    const { output } = setup(true);
    const submitButton = output.props.children[3];
    expect(submitButton.props.value).toBe(<LoadingButton/>);
  });
});
