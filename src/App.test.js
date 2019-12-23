import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as enzyme from 'enzyme';
import {mount, shallow} from 'enzyme';
import Calculator from './Calculator';

import Adapter from 'enzyme-adapter-react-16';
var assert = require('assert');
var calculator = require('./Calculator.js');
const calc = new Calculator();
enzyme.configure({ adapter: new Adapter() });
it('renders without crashing', () => {
 const wrapper = shallow(<calc/>)
});
describe('Calculator', function(){
  describe('add',function(){
    it('should handle two values',function() {
      assert.equal(calc.add(3,4),7);
    
      });
    it('should handle negative values',function() {
      assert.equal(calc.add(39,-4),35);
    
      });
      it('should handle values with a coma',function() {
        assert.equal(calc.add(39.5,-4.5),35.0);
      
        });
        it('should handle multiplication by 0',function() {
          assert.equal(calc.mult(4,0),0);
        
          });
          it('should handle division by 0',function() {
            assert.equal(calc.div(4,0),-1);
          
            });
  });
});

   

 

