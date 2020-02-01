const themeReducer = (state = '', action) => {
  switch (action.type) {
    case 'EDIT_THEME': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default themeReducer;