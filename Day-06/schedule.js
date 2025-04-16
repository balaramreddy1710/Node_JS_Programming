function scheduleTask() {
  let count = 0;
  const interval = setInterval(() => {
    console.log(`Task ${++count}`);
    if (count === 5) {
      clearInterval(interval);
      console.log("Stopped");
    }
  }, 1000);
}

scheduleTask();
