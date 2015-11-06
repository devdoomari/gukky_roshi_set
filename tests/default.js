import {
  GukkyRoshiSet,
} from '../src';

import {assert} from 'chai';


describe('[Default implementation]', ()=> {
  it('should have latest value from multiple set operations', ()=> {
    const testSet = new GukkyRoshiSet();
    testSet.set('key1', 'value1', 1);
    testSet.set('key1', 'value10', 10);
    testSet.set('key1', 'value5', 5);
    testSet.set('key2', 'value1', 1);
    testSet.set('key3', 'value1', 1);
    testSet.set('key1', 'value1', 3);
    testSet.set('key1', 'value1', 2);
    testSet.set('key1', 'value1', 7);

    assert.equal(testSet.get('key1'), 'value10');
  });

  it('should have latest value from multiple set operations', ()=> {
    const testSet = new GukkyRoshiSet();
    testSet.set('key1', 'value1', 1);
    testSet.set('key1', 'value10', 10);
    testSet.remove('key1', 15);
    testSet.set('key1', 'value12', 12);
    assert.equal(testSet.get('key1'), null);
  });
});
