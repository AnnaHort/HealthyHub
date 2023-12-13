import { createSlice } from '@reduxjs/toolkit';

// початковий стан
const initialState = {
  testState: false,
};
// створення слайсу та редюсерів(функції обробки подій)
const testSlice = createSlice({
  name: 'testSlice',
  initialState: initialState,
  reducers: {
    makeTrueState(state) {
      state.testState = true;
    },
    makeFalseState(state) {
      state.testState = false;
    },
  },
});
// експорт екшенів (події для dispatch())
export const { makeFalseState, makeTrueState } = testSlice.actions;
// експорт редюсеру до стора
export const testReducer = testSlice.reducer;
