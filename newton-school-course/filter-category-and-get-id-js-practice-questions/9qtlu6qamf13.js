function customFilter(list, key, value) {
  return list
    .filter(item => item[key] == value)
    .map(item => item.id);
}