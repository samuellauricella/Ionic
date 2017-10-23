export const selectedUser = (state: any = null, {type, payload}) => {
  switch (type) {

    case 'SELECT_USER':
      return payload;

    case 'SEARCH_USER':
        return payload
      ;

      default:
      return state;
  }
};
