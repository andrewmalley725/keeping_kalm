import React from 'react';
import data from '../js/data';
import '../css/styles.css';
import { useParams } from 'react-router-dom';


export default function Info(){
    let element;
    let { prod } = useParams();
    let fname;

    for (let i of data){
        if (i.prodName.split(' ')[0].toLowerCase() === prod){
            element = i;
            fname = i.prodName.split(' ')[0].toLowerCase();
        }
    }

    return(
        <h1>{element.prodName} Info Page</h1>
    )
}