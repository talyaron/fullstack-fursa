import { useState } from "react";
import axios from 'axios';
import './productRow.scss'
//import Button from "@material-ui/core/Button";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


function ProductRow(props: any) {
    const product = props.product;
    const treatment = props.treatment;
    const type = props.type;
    const [edit, setEdit] = useState(false);
    const [newProduct, setProduct] = useState({ name: product.name, text: product.text, img: product.img, category: product.category });
    const [newTreatment, setTreatment] = useState({ name: product.name, text: product.text, img: product.img,category: product.category });

    const [selected, setImage] = useState('');

    function handleAddImg(e: any) {
        setProduct({ ...newProduct, img: e.target.files[0].name })
        setImage(e.target.files[0])
    }

    function handleEdit() {
        setEdit(!edit);
    }

    async function handleUpdate(ev: any) {
        ev.preventDefault();
        const id = ev.target.id
        const formData = new FormData();
        formData.append('image', selected);
        formData.append('id', id);
        formData.append('name', newProduct.name);
        formData.append('text', newProduct.text);
        formData.append('category', newProduct.category);
        const config = { headers: { 'content-type': 'multipart/form-data' } }

        //const { data } = await axios.patch(`/${type}s/update-${type}`, formData,config);
    
        axios.patch(`/update-${type}`, formData, config)
            .then(({ data }) => {
                console.log(data)
            })
            .catch(err => {
                console.error(err)
            })
        setEdit(!edit);
    }


    async function handleDelete(ev: any, id: any) {
        ev.preventDefault();
        const { data } = await axios.post(`/${type}s/delete-${type}`, { _id: id });
        console.log(data)        
    }

    return (
        <div className="productCard">
            {edit ? (
                <form onSubmit={handleUpdate} id={product._id}>
                    <input type="text" value={newProduct.name} placeholder="name" name="name" onChange={(e) => setProduct({ ...newProduct, name: e.target.value })} />
                    <input type="text" value={newProduct.text} placeholder="text" name="text" onChange={(e) => setProduct({ ...newProduct, text: e.target.value })} />
                    {type==='product' ?(<><input type="text" value={newProduct.category} placeholder="category" name="category" onChange={(e) => setProduct({ ...newProduct, category: e.target.value })} /><input type="file" onChange={(e) => handleAddImg(e)} /></>):( <input type="file" onChange={(e) => handleAddImg(e)} />)}
                    {/* <input type="text" value={newProduct.img} placeholder="img" name="img" onChange={(e) => setProduct({ ...newProduct, img: e.target.value })} /> */}
                    {/* <input type="file" onChange={(e) => handleAddImg(e)} /> */}
                    <button type="submit">Update</button>
                </form>
            ) : (
                <table >

                    <tbody>
                        <tr key={product._id} >
                            <td>{product.name}</td>
                            <td>{product.text}</td>
                            {type==='product' ? (<><td>{product.category}</td><td><img src={product.img}></img></td></>):(<td><img src={product.img}></img></td>)}
                            <td><button className="btn" onClick={handleEdit}>Edit</button></td>
                            <td><button className="btn" onClick={(e) => handleDelete(e, product._id)}>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
                // <TableContainer component={Paper}>
                //     <Table>
                //         {/* <TableHead>
                //             <TableRow>
                //                 <TableCell>Name</TableCell>
                //                 <TableCell align="right">Description</TableCell>
                //                 <TableCell align="right">Category</TableCell>
                //                 <TableCell align="right">path</TableCell>
                //                 <TableCell align="right">Image</TableCell>
                //             </TableRow>
                //         </TableHead> */}
                //         {/* <TableBody>

                //             <TableRow
                //                 key={product._id}
                //                 // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                //             >
                //                 <TableCell align="left" className="name">{product.name}</TableCell>
                //                 <TableCell align="left" className="text">{product.text}</TableCell>
                //                 <TableCell align="left"className="category">{product.category}</TableCell>
                //                 {/* <TableCell align="right">{product.img}</TableCell> */}
                //                 <TableCell align="left" className="image"><img src={product.img}></img></TableCell>
                //                 <TableCell align="left" ><button className="btn" onClick={handleEdit}>Edit</button></TableCell> 
                //                 <TableCell align="left" ><button className="btn" onClick={(e) => handleDelete(e, product._id)}>Delete</button></TableCell> 
                //             </TableRow>

                //         </TableBody>
                //     </Table>
                // </TableContainer> */}



            )}
        </div>
    );
}

export default ProductRow;