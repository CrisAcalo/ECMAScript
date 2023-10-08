//va a tener dos casos, resolve o reject

const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Complete...");
    } else {
      reject("Error...");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
