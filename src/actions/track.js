import * as actionTypes from '../constants/actionTypes';

//action creator setTracks has been used in store.dispatch(actions.setTracks(tracks));
export function setTracks(tracks) {
  return {
    //return an object with type: action constant just defined
    //                 with playload,will be used to change the global state.
    type: actionTypes.TRACKS_SET,
    tracks
  };
};
