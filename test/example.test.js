import isYes from '../src/isYes.js';

const test = QUnit.test;

test('test isyes', function(assert) {
    const answer = 'yes';
    const expected = true;

    const result = isYes(answer);

    assert.equal(result, expected);
});



test('test isYes', function(assert) {
    const answer = 'Yes';
    const expected = true;

    const result = isYes(answer);

    assert.equal(result, expected);
});



test('test isY', function(assert) {
    const answer = 'Y';
    const expected = true;

    const result = isYes(answer);

    assert.equal(result, expected);
});



test('test isy', function(assert) {
    const answer = 'y';
    const expected = true;

    const result = isYes(answer);

    assert.equal(result, expected);
});



test('test isYes', function(assert) {
    const answer = 'Yes';
    const expected = true;

    const result = isYes(answer);

    assert.equal(result, expected);
});



test('test isNo', function(assert) {
    const answer = 'No';
    const expected = false;

    const result = isYes(answer);

    assert.equal(result, expected);
});



test('test isno', function(assert) {
    const answer = 'no';
    const expected = false;
    
    const result = isYes(answer);

    assert.equal(result, expected);
});