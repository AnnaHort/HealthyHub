export const getRecommendedFood = (state) =>
  state?.recommendedFood?.foodItem?.items;
export const getErrorRecommendedFood = (state) =>
  state?.recommendedFood?.foodItem?.error;
export const getIsLoadingRecommendedFood = (state) =>
  state?.recommendedFood?.foodItem?.isLoading;
