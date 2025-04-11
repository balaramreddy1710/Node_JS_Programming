const counter = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log("The count is", count);
    },
  };
})();

counter.increment();
counter.increment();
