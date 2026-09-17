function addNumbers(...args) {
  return args.reduce((sum, current) => sum + current, 0);}