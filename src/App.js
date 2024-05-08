import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Page from './components/Page';
import { Routes, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: 'Концерт Дениса Мацуева',
          date: '15 мая, 19:00',
          area: 'БКЗ «Октябрьский»',
          img: 'denis.jpeg',
          price: 'от 2000 ₽',
          discount: '10%',
          category: 'mgn',
          description: 'Концерт Дениса Мацуева, 15 мая в 19:00, БКЗ «Октябрьский», цена от 2000 рублей, среда доступности присутствует'
        },
        {
          id: 2,
          title: 'Первый большой концерт WHITE GALLOWS',
          date: '08 сентября, 20:00',
          area: 'Клуб «Космонавт»',
          img: 'gallows.jpg',
          price: 'от 1000 ₽',
          discount: '10%',
          access: false,
          category: 'none',
          description: 'Первый большой концерт WHITE GALLOWS, 15 мая в 20:00, Клуб «Космонавт», цена от 1000 рублей, среда доступности отсутствует'
        },
        {
          id: 3,
          title: 'Концерт группы «Папин Олимпос»',
          date: '24 мая, 20:00',
          area: 'Клуб Sound',
          img: 'olimpos.jpg',
          price: 'от 1400 ₽',
          discount: '10%',
          access: false,
          category: 'mgn',
          description: 'Концерт группы «Папин Олимпос», 24 мая в 20:00, Клуб Sound, цена от 1400 рублей, среда доступности отсутствует'
        },
        {
          id: 4,
          title: 'Концерт Dead Blonde',
          date: '19 мая, 20:00',
          area: 'Клуб «А2»',
          img: 'blonde.jpg',
          price: 'от 1999 ₽',
          discount: '10%',
          access: false,
          category: 'rzhya',
          description: 'Концерт Dead Blonde, 19 мая в 20:00, Клуб «А2», цена от 1999 рублей, среда доступности отсутствует'
        },
        {
          id: 5,
          title: 'Концерт группы «Lumen» & Orchestra',
          date: '17 мая, 20:00',
          area: 'МТС Live Холл Санкт-Петербург',
          img: 'lumen.jpg',
          price: 'от 2800 ₽',
          discount: '10%',
          access: false,
          category: 'rzhya',
          description: 'Концерт группы «Lumen» & Orchestra, 17 мая в 20:00, Клуб «А2», цена от 1999 рублей, среда доступности отсутствует'
        },
        {
          id: 6,
          title: 'Концерт Lida. Бомж тур',
          date: '12 мая, 20:00',
          area: 'Клуб «А2»',
          img: 'lida.jpg',
          price: 'от 4000 ₽',
          discount: '10%',
          access: true,
          category: 'none',
          description: 'Концерт Lida. Бомж тур, 12 мая в 20:00, Клуб «А2», цена от 4000 рублей, среда доступности присутствует'
        },
        {
          id: 7,
          title: 'Концерт группы «Filatov & Karas»',
          date: '16 ноября, 19:00',
          area: 'Aurora Concert Hall»',
          img: 'filatov.jpg',
          price: 'от 2000 ₽',
          discount: '10%',
          access: false,
          category: 'mgn',
          description: 'Концерт группы «Filatov & Karas», 16 ноября в 20:00, Aurora Concert Hall, цена от 2000 рублей, среда доступности отсутствует'
        },
        {
          id: 8,
          title: 'Концерт «Симфоническое Rammstein-шоу»',
          date: '27 сентября, 20:00',
          area: 'Клуб «А2»',
          img: 'rammstein.jpg',
          price: 'от 2500 ₽',
          discount: '10%',
          access: false,
          category: 'tflkm',
          description: 'Концерт «Симфоническое Rammstein-шоу», 27 сентября в 20:00, Клуб «А2», цена от 2500 рублей, среда доступности отсутствует'
        },
        {
          id: 9,
          title: 'Концерт «Романс Коломбины»',
          date: '19 мая, 13:00',
          area: 'Арт-кафе «Подвалъ Бродячей Собаки»',
          img: 'romans.jpeg',
          price: 'от 1500 ₽',
          discount: '10%',
          access: false,
          category: 'tflkm',
          description: 'Концерт «Романс Коломбины», 19 мая в 13:00, Арт-кафе «Подвалъ Бродячей Собаки», цена от 1500 рублей, среда доступности отсутствует'
        },
        {
          id: 10,
          title: 'Концерт «Романс Коломбины»',
          date: '30 мая, 20:00',
          area: 'Клуб «Космонавт»',
          img: 'brick.jpeg',
          price: 'от 1500 ₽',
          discount: '10%',
          access: true,
          category: 'none',
          description: 'Концерт «Романс Коломбины», 19 мая в 13:00, Клуб «Космонавт», цена от 1500 рублей, среда доступности отсутствует'
        },
        {
          id: 11,
          title: 'Органный концерт «Золотая классика»',
          date: '6 мая, 19:00',
          area: 'Лютеранская церковь Святых Петра и Павла (Петрикирхе)',
          img: 'golden.jpeg',
          price: 'от 699 ₽',
          discount: '10%',
          access: true,
          category: 'rzhya',
          description: 'Концерт «Романс Коломбины», 19 мая в 13:00, Лютеранская церковь Святых Петра и Павла (Петрикирхе), цена от 699 рублей, среда доступности отсутствует'
        },
        {
          id: 12,
          title: 'Органный концерт «Золотая классика»',
          date: '12 мая, 15:00',
          area: 'Лютеранская церковь Святых Петра и Павла (Петрикирхе)',
          img: 'masterpiece.jpg',
          price: 'от 699 ₽',
          discount: '10%',
          access: true,
          category: 'none',
          description: 'Органный концерт «Золотая классика», 19 мая в 13:00, Лютеранская церковь Святых Петра и Павла (Петрикирхе), цена от 699 рублей, среда доступности присутствует'
        },
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Items items={this.state.items} />} />
          <Route path="/page" element={<Page />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
