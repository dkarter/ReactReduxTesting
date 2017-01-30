import * as types from './action_types';

export const saveComment = (comment) => {
  return {
    type: types.SAVE_COMMENT,
    payload: comment,
  };
};
