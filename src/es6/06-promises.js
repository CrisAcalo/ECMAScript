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

function getDataFromServer(shouldSucceed) {
  return new Promise((resolve, reject) => {
    // Simulemos una solicitud a un servidor (puede ser una API, una base de datos, etc.)
    setTimeout(() => {
      if (shouldSucceed) {
        const data = { message: "Datos recuperados exitosamente" };
        resolve(data); // Datos exitosamente recuperados
      } else {
        reject("Error al recuperar datos"); // Simulamos un error
      }
    }, 2000);
  });
}

// Caso de éxito
getDataFromServer(true)
  .then((data) => {
    console.log(data.message);
  })
  .catch((error) => {
    console.error("Error al obtener datos:", error);
  });

// Caso de error
getDataFromServer(false)
  .then((data) => {
    console.log(data.message);
  })
  .catch((error) => {
    console.error("Error al obtener datos:", error);
  });
