import { expect } from '../test_helper';

import commentsReducer from '../../src/reducers/comments_reducer';
import { SAVE_COMMENT } from '../../src/actions/action_types';

describe('Comments Reducer', () => {
  it('handles actions of unknown type', () => {
    expect(commentsReducer([], {})).to.eql([]);
  });

  it('handles actions of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'something',
    };
    expect(commentsReducer([], action)).to.eql(['something']);
  });
});
