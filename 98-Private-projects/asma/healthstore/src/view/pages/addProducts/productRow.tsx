import { useState } from "react";
import axios from 'axios';
import './productRow.scss'
import Button from "@material-ui/core/Button";


function ProductRow(props: any) {
    const product = props.product;
    const type = props.type;
    const [edit, setEdit] = useState(false);
    const [newProduct, setProduct] = useState({ name: product.name, text: product.text, img: product.img, category: product.category });

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
        // const name = ev.target.elements.name.value;
        // const text = ev.target.elements.text.value;
        // const category = ev.target.elements.category.value;
        console.log('selected',selected);
        console.log('product',newProduct);
       
        const formData =new FormData();
        formData.append('image', selected );
        formData.append('id', id );
        formData.append('name', newProduct.name );
        formData.append('text', newProduct.text );
        formData.append('category', newProduct.category );
        const config = { headers: { 'content-type': 'multipart/form-data' } }

        //const { data } = await axios.patch(`/${type}s/update-${type}`, formData,config);
       // const { data } = await axios.patch('/update-product', formData,config);

        axios.patch('/update-product',formData,config)
        .then(({ data }) => {
            console.log(data)
        })
        .catch(err => {
            console.error(err)
        })
        setEdit(!edit);
    }


    async function handleDelete(ev: any, id: any) {
        console.log('delete')
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
                    <input type="text" value={newProduct.category} placeholder="category" name="category" onChange={(e) => setProduct({ ...newProduct, category: e.target.value })} />
                    {/* <input type="text" value={newProduct.img} placeholder="img" name="img" onChange={(e) => setProduct({ ...newProduct, img: e.target.value })} /> */}
                    <input type="file"  onChange={(e) => handleAddImg(e)}/>
                    <button type="submit">Update</button>
                </form>
            ) : (
                <table >
                    <tbody>
                        <tr key={product._id} >
                            <td>{product.name}</td>
                            <td>{product.text}</td>
                            <td>{product.category}</td>
                            <td>{product.img}</td>
                            <td><img src={product.img}></img></td>
                            <td><button className="btn" onClick={handleEdit}>Edit</button></td>
                            <td><button className="btn" onClick={(e) => handleDelete(e, product._id)}>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ProductRow;