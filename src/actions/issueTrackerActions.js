import * as types from './index';

export const createIssueAction = (issue) => {
  return {
    type: types.CREATE_ISSUE,
    issue
  }
};
