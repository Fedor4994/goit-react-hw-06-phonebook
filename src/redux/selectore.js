export const getFilter = state => state.filter;

export const getContacts = state => {
  const normalizedFilter = getFilter(state).toLowerCase();

  const visibleContacts = state.contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return visibleContacts;
};
