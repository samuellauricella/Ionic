export const users = (state: any = [], {type, payload}) => {
  switch (type) {

    case 'ADD_USERS':
      return payload;

    case 'ADD_USER_REPOS':
      return payload;

    default:
      return state;
  }
};
