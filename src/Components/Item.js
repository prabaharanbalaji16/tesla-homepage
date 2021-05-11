import { ExpandMore } from '@material-ui/icons'
import React from 'react'
import Button from './Button';
import './Item.css';

function Item({title,desc,image,twoButtons,first,rightBtnTxt,leftBtnTxt}) {
    return (
        <div className="item" style={{
            backgroundImage:`url(${image})`
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__textDesc">
                    <p>{desc}</p>
                </div> 
                </div>
                
                <div className="item__LowerThird">
                    <div className="item__buttons">
                        <Button imp="primary" text={leftBtnTxt} />
                        {
                            twoButtons && (
                                <Button imp="secondary" text={rightBtnTxt} />
                            )
                        }
                    </div>
                    {
                        first && (
                            <div className="item__expand">
                                <ExpandMore />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Item
