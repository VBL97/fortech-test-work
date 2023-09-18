export function prepareTypes(typesArray) {
  console.log(typesArray);
  return typesArray.map((type) => {
    return type.type.name;
  });
}
