const prepareTypes = function prepareTypes(typesArray) {
  return typesArray.map((type) => type.type.name);
};

export default prepareTypes;
