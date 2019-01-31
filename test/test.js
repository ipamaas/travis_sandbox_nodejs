/* eslint-env mocha */
'use strict';

var expect = require('chai').expect;
var multiply = require('../index');

describe('Calculator Checks', function() {

  it('should return correct value for a simple multiplication', function() {

    // 1. ARRANGE
    var a = 2;
    var b = 3;
    var expectedValue = a * b;

    // 2. ACT
    var value = multiply(a, b);

    // 3. ASSERT
    expect(value).to.be.equal(expectedValue);

  });

});
