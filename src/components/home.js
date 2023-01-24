import React from 'react';
import data from '../js/data';
import '../css/styles.css';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <div id='inventory'>
                {
                    data.map(i => {
                        return(
                            <Link className="prodLink" to={`info/${i.prodName.split(' ')[0].toLowerCase()}`}>
                                <div class='product'>
                                    <h4>{i.prodName}</h4>
                                    <img src={require(`../assets/${i.thumbnail}`)} alt={i.prodName}></img><br/>
                                    <b>${i.prodPrice}</b><br/>
                                    <a href={i.amazon}>Purchase on Amazon</a>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}