const INITIAL_STATE = {
  title: '',
  desc: '',
  value: '',
  points: [],
};

// eslint-disable-next-line default-param-last
const plans = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ('PLAN_ACTION'):
      return action.state;
    default:
      return state;
  }
};

export default plans;
