// BEGIN (write your solution here)
export default (generator) => {
  const iterator = generator();

  const iter = (result) => {
    const { done, value } = result;
    if (done) {
      return value;
    }

    return value.then((res) => iter(iterator.next(res)));
  };

  return iter(iterator.next())
    .catch((err) => iter(iterator.throw(err)));
};
// END
