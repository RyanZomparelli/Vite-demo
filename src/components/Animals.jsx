import { data } from "../utils/constants";

function Animals({ selectedAnimal }) {
  let animal = data.find((item) => {
    return item.name === selectedAnimal;
  });

  animal = animal?.name ? animal : data.find((item) => item.default);

  return <img src={animal.image} alt={animal.alt} />;
}

export default Animals;
