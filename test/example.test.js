import compareNumbers from '../compareNumbers.js';

const test = QUnit.test;

test('Guess is correct', function(assert){
    const expect = 0;
    const result = compareNumbers(3, 3);
    assert.equal(result, expect);
});


test('Guess is too low', function(assert){
    const expect = -1;
    const result = compareNumbers(1, 3);
    assert.equal(result, expect);
});


test('Guess is too high', function(assert){
    const expect = 1;
    const result = compareNumbers(5, 3);
    assert.equal(result, expect);
});