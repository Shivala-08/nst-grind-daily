async function categorizeByKey(api, key) {
  const response = await fetch(api);
  const data = await response.json();

  if (!Array.isArray(data)) {
    return {};
  }

  return data.reduce((acc, item) => {
    if (
      item &&
      typeof item === "object" &&
      Object.prototype.hasOwnProperty.call(item, key) &&
      item[key] !== undefined &&
      item[key] !== null
    ) {
      const groupKey = String(item[key]);
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(item);
    }
    return acc;
  }, {});
}