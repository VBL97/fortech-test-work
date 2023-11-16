export function prepareTypes(typesArray) {
  return typesArray.map((type) => {
    return type.type.name;
  });
}
