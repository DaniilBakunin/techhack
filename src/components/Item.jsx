import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Item extends Component {
    render() {
        return (
            <Link to='/page' className='item' title={this.props.item.description}>
                <img src={"./img/" + this.props.item.img} alt={this.props.item.title}/>
                <div className='item__rubles'>
                    <p className='item__discount' title={this.props.item.discount + "скидка"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 16 16" ><path d="M11.239 2.575H7.192c-.495 0-.97.197-1.32.545-.35.349-.546.821-.546 1.314v2.013H3.382a1.95 1.95 0 0 0-1.375.567 1.932 1.932 0 0 0 0 2.738c.365.363.86.567 1.375.567h1.945v1.935a1.928 1.928 0 0 0 .551 1.402 1.945 1.945 0 0 0 2.15.433 1.945 1.945 0 0 0 1.055-1.078c.094-.241.14-.498.133-.757V10.32h2.023c.494 0 .969-.196 1.319-.545.35-.348.546-.82.546-1.314V4.434c0-.493-.196-.965-.546-1.314a1.871 1.871 0 0 0-1.32-.545Z" ></path><defs><linearGradient id="Cashback_svg__a" x1="2" x2="20.966" y1="21" y2="4.083" gradientUnits="userSpaceOnUse"><stop offset="0.063" stop-color="#9BD5FF"></stop><stop offset="0.443" stop-color="#9B93FF"></stop><stop offset="0.583" stop-color="#9A8DFF"></stop><stop offset="0.849" stop-color="#7C86FE"></stop></linearGradient></defs></svg>
                        {this.props.item.discount}
                    </p>
                    <p className='item__price'>
                        {this.props.item.price}
                    </p>
                </div>
                <h3>{this.props.item.title}</h3>
                <time className ='item__date'>{this.props.item.date}</time>
                <p className='item__area'>{this.props.item.area}</p>
            </Link>
        )
    }
}


export default Item