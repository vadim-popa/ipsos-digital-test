export function SET_LIST_DATA(state, payload) {
  state.listData = payload;
}

export function SPLIT_LIST_DATA(state, payload) {
  const dummy = JSON.parse(JSON.stringify(payload));
  const middleIndex = Math.ceil(dummy.length / 2);
  state.listDataFirstHalf = dummy.splice(0, middleIndex);
  state.listDataSecondHalf = dummy.splice(-middleIndex);
}
