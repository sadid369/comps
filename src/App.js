import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "jdhAHDhK",
      label: "Can i use react on a project?",
      content:
        "Anim ad ad exercitation reprehenderit laborum labore ullamco officia et ipsum labore et. Et qui anim exercitation cillum in. Est sit exercitation ipsum non culpa amet amet qui non qui non excepteur in. Pariatur et Lorem veniam ut proident qui labore officia commodo velit officia non. Aute culpa in reprehenderit nulla Lorem deserunt nostrud ipsum ex. Quis pariatur cupidatat veniam incididunt id occaecat sunt consequat culpa.",
    },
    {
      id: "<JdhHdjjad",
      label: "Can i use javascript on a project?",
      content:
        "Anim ad ad exercitation reprehenderit laborum labore ullamco officia et ipsum labore et. Et qui anim exercitation cillum in. Est sit exercitation ipsum non culpa amet amet qui non qui non excepteur in. Pariatur et Lorem veniam ut proident qui labore officia commodo velit officia non. Aute culpa in reprehenderit nulla Lorem deserunt nostrud ipsum ex. Quis pariatur cupidatat veniam incididunt id occaecat sunt consequat culpa.",
    },
    {
      id: "M<dhHGBd",
      label: "Can i use css on a project?",
      content:
        "Anim ad ad exercitation reprehenderit laborum labore ullamco officia et ipsum labore et. Et qui anim exercitation cillum in. Est sit exercitation ipsum non culpa amet amet qui non qui non excepteur in. Pariatur et Lorem veniam ut proident qui labore officia commodo velit officia non. Aute culpa in reprehenderit nulla Lorem deserunt nostrud ipsum ex. Quis pariatur cupidatat veniam incididunt id occaecat sunt consequat culpa.",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
