async function handleAsync() {
  const response = await asyncFunction();
  const data = await response.json();
  console.log(data);
}

handleAsync();