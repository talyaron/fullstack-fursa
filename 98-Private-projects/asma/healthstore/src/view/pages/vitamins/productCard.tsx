import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import "./productCard.scss";


//components
//import Nav from '../../components/nav/Nav'

export interface ProductProps {
    name: string;
    id: number;
    img: string;
    text: string;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    color:'green',
    //border: '2px solid #000',
    //boxShadow: 24,
    p: 3,
};



function ProductCard(props: ProductProps) {
    const { name, id, img, text } = props;
    // let [discription, setDiscription] = useState('');
    // function showText(e: any) {
    //     try {
    //         if (discription == '')
    //             discription = text;
    //         else
    //             discription = '';
    //         setDiscription(discription)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <div className="card">
                {/* <Link to={`/vitamins/${name}`}> */}
                <div className="card__item" onClick={handleOpen}>
                    <img src={img}></img>
                    <span className="card__item__title">{name}</span>
                </div>
                {/* </Link> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <Typography id="modal-modal-description" >
                            {text} 
                        </Typography>
                    </Box>
                </Modal>
            </div>
            {/* <div className="card__item__text">{discription}</div> */}
        </div>

    )
}

export default ProductCard;