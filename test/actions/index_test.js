import { expect } from '../test_helper';

import * as types from '../../src/actions/action_types';
import { saveComment } from '../../src/actions/index';

describe('actions', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).to.eq(types.SAVE_COMMENT)
    });

    it('has the correct payload', () => {
      const action = saveComment('new comment');
      expect(action.payload).to.eq('new comment')
    });
  });
});
