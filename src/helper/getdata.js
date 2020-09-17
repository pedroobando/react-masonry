import faker from "faker";

export const gedata = (total) => {
  const fakerArray = [];
  for (let index = 0; index < total; index++) {
    fakerArray.push(record());
  }
  return fakerArray;
};

const record = () => {
  const random = faker.random;
  const fimage = faker.image;

  const _id = random.number(1100, 3000);

  const alto = 360;
  const ancho = 220;

  const urlImage = _id % 2 ? fimage.imageUrl(alto, ancho) : fimage.imageUrl(ancho, alto);
  // const urlImage = fimage.imageUrl(ancho, alto);

  const item = {
    _id,
    uuid: random.uuid(),
    name: random.word(),
    image: urlImage,
    coments: random.words(20),
  };

  return item;
};
