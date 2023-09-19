export const USER_ACTION = 'USER_ACTION';
export const PLAN_ACTION = 'PLAN_ACTION';

export const userAction = (state) => ({
  type: 'USER_ACTION',
  state,
});

export const planAction = (state) => ({
  type: 'PLAN_ACTION',
  state,
});
