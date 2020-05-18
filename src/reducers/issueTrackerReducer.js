import * as types from '../actions';
const initState = {
  issues: [],
  
}
export default function(state = initState, action) {
  
 
  switch(action.type) {
    case types.CREATE_ISSUE:
      const issue = action.issue;
      let issues=state.issues;
      issues.push(issue);
      console.log('issues',issues);
      

      
      return { ...state, issues };
    
    default:
      return state;
  }
};