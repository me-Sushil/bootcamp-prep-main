const cacheSavings = (callback) => {
  let cache = {};

  return (arg) => {
    if (cache[arg]) {
       return cache[arg];
    }

    const result = callback(arg);
    cache[arg] = result;
    return result;

  };
};
