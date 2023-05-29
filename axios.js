// axios
//   .get("https://swapi.dev/api/people/1")
//   .then((res) => console.log("Response: ", res))
//   .catch((err) => console.log("error! ", err));

// async await conversion
const starWArs = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
starWArs(1);
starWArs(2);
