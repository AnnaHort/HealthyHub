export const getUserStatsFood = state => state.userStatsDayReducer.food;
export const getUserStatsWater = state => state.userStatsDayReducer.water;
export const getUserStatsLoad = state => state.userStatsDayReducer.load;

//      FOOD STATISTIC FOR DAY
export const getCaloriesDayilyNorma = state => state.userStatsDayReducer.food.caloriesDayilyNorma;
export const getCaloriesAmount = state => state.userStatsDayReducer.food.caloriesAmount;
export const getCaloriesLeft = state => state.userStatsDayReducer.food.caloriesLeft;

export const getCarbonohidratesAmount = state => state.userStatsDayReducer.food.carbonohidratesAmount;
export const getCarbonohidratesLeft = state => state.userStatsDayReducer.food.carbonohidratesLeft;

export const getFatAmount = state => state.userStatsDayReducer.food.fatAmount;
export const getFatLeft = state => state.userStatsDayReducer.food.fatLeft;

export const getProteinAmount = state => state.userStatsDayReducer.food.proteinAmount;
export const getProteinLeft = state => state.userStatsDayReducer.food.proteinLeft;

//      WATER STATISTIC FOR DAY

export const getWaterDailyNorma = state => state.userStatsDayReducer.water.waterDailyNorma;
export const getDailyNormFulfillment = state => state.userStatsDayReducer.water.dailyNormFulfillment;
export const getWaterLeft = state => state.userStatsDayReducer.water.waterLeft;
export const getwaterAmount = state => state.userStatsDayReducer.water.waterAmount;


export const getIsLoadingUserStats = state => state.userStatsDayReducer.isLoading;