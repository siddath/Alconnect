import React from 'react';
import Flex from './FlexContainer';
export default function Card(props){

    return (
        <div className="card">
            <img src={props.imgURL} className="card-img-top mx-auto d-block" style={{width:"120px"}} alt=""/>
            <div className="card-body">
                <h5 className="card-title">Bhavuk Garg</h5>
                <p className="card-text">Amazon Intern 2020</p>
                <hr/>
            </div>
            <div style={{fontSize: '12px'}}>
                <Flex 
                    left="Who's Viewed Your Profile"
                    right="50"
                />
                <Flex
                    left="Views of Your Post"
                    right="123"
                />
            </div>
            <hr/>
        </div>
    )
}