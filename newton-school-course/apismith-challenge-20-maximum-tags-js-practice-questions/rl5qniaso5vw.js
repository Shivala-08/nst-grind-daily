async function queryMaximumTags(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      return [];
    }

    // Find the maximum number of tags among all objects
    let maxTags = 0;
    for (const item of data) {
      const tagCount = Array.isArray(item.tags) ? item.tags.length : 0;
      if (tagCount > maxTags) {
        maxTags = tagCount;
      }
    }

    // Filter and return only the objects that have the maximum number of tags
    return data.filter(item => {
      const tagCount = Array.isArray(item.tags) ? item.tags.length : 0;
      return tagCount === maxTags;
    });
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    throw error;
  }
}