'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const newState = { ...state };
  const clonedStates = [];

  for (const elem of actions) {
    if (elem.type === 'addProperties') {
      Object.assign(newState, elem.extraData);
      clonedStates.push({ ...newState });
    } else if (elem.type === 'removeProperties') {
      for (let i = 0; i < elem.keysToRemove.length; i++) {
        delete newState[elem.keysToRemove[i]];
      }
      clonedStates.push({ ...newState });
    } else {
      for (const key in newState) {
        delete newState[key];
      }
      clonedStates.push({ ...newState });
    }
  }

  return clonedStates;
}

module.exports = transformStateWithClones;
