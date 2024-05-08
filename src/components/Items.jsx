import React, { Component } from 'react'
import Item from "./Item";
import Calendar from './Calendar';

export class Items extends Component {
    state = {
        filterCategory: ''
    }

    handleFilterChange = (category) => {
        this.setState(prevState => ({
            filterCategory: prevState.filterCategory === category ? '' : category
        }));
    }

    render() {
        const { filterCategory } = this.state;
        const filteredItems = filterCategory
            ? this.props.items.filter(item => item.category === filterCategory)
            : this.props.items;

        return (
            <main className='main container '>
                <h1 className="main__title">Билеты на концерты в Санкт-Петербурге</h1>
                <div className='main__calendar'>
                    <Calendar />
                </div>
                <div className='filters'>
                    <button className='filter__button' onClick={() => this.handleFilterChange('')}>
                        Выберите жанр
                    </button>
                    <button className='filter__button' aria-label="Фильтр по Площадке">Площадка</button>
                    <button className='filter__button _no_arrow' aria-label="Фильтр по Пушкинской карте">Пушкинская карта</button>
                    <button className='filter__button' aria-label="Фильтр по рейтингу">По рейтингу</button>
                    <button className='filter__button _new_filter' aria-label="Фильтр для МГН" onClick={() => this.handleFilterChange('mgn')}>
                        Для МГН
                    </button>
                    <button className='filter__button _new_filter' aria-label="Фильтр для Тифлокомментирования" onClick={() => this.handleFilterChange('tflkm')}>
                        Тифлокомментирование
                    </button>
                    <button className='filter__button _new_filter' aria-label="Фильтр для РЖЯ" onClick={() => this.handleFilterChange('rzhya') }>
                        Перевод на РЖЯ
                    </button>
                </div>
                <div className='container_main'>
                    {filteredItems.map(el => (
                        <Item key={el.id} item={el} />
                    ))}
                </div>
            </main>
        )
    }
}

export default Items