export const isPermission = (permissions, value) => {
  if (permissions) {
    return permissions.find((item) => item.value === value);
  }
};
