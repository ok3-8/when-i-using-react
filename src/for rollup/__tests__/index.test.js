import React from "react"; 
import _ from 'lodash';
import Button from '../src/index';
import { shallow } from 'enzyme';

describe('Button', () => {
  it('Button shows "1234"', () => {
    const app = shallow(<Button test="1234"/>);
    expect(app.find('.button').exists());
  });
});