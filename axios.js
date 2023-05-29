// axios
//   .get("https://swapi.dev/api/people/1")
//   .then((res) => console.log("Response: ", res))
//   .catch((err) => console.log("error! ", err));

// async await conversion
// const starWArs = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// starWArs(1);
// starWArs(2);

// //dad joke api

// const dadJoke = async () => {
//   try {
//     //creating headers object
//     const config = {
//       headers: {
//         Accept: "application/json",
//       },
//     };
//     const res = await axios.get("https://icanhazdadjoke.com/", config);
//     // console.log(res);
//     console.log(res.data.joke);
//   } catch (e) {
//     console.log("Error! ", e);
//   }
// };

// dadJoke();

// /dad joke api - appending in html web page ul

const jokes = document.querySelector("#jokes");

const dadJoke = async () => {
  try {
    //creating headers object
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    // console.log(res);
    console.log(res.data.joke);
    const newLi = document.createElement("li");
    newLi.append(res.data.joke);
    jokes.append(newLi);
  } catch (e) {
    console.log("Error! ", e);
  }
};
