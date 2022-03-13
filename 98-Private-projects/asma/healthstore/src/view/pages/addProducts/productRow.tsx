import { useState } from "react";
import axios from 'axios';
import './productRow.scss'

function ProductRow(props: any) {
    const product = props.product;
    const type = props.type;
    const [edit, setEdit] = useState(false);
    const [newProduct, setProduct] = useState({ name: product.name, text: product.text, img: product.img });

    function handleEdit() {
        setEdit(!edit);
    }

    async function handleUpdate(ev: any) {
        ev.preventDefault();
        const id = ev.target.id
        const name = ev.target.elements.name.value;
        const text = ev.target.elements.text.value;
        const img = ev.target.elements.img.value;
        const { data } = await axios.patch(`/${type}s/update-${type}`, { name, text, img, id });
        console.log(data)
        setEdit(!edit);
    }


    async function handleDelete(ev: any,id: any) {
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
                    <input type="text" value={newProduct.img} placeholder="img" name="img" onChange={(e) => setProduct({ ...newProduct, img: e.target.value })} />
                    <button type="submit">Update</button>
                </form>
            ) : (
                <table >
                    <tbody>
                        <tr key={product._id} >
                            <td>{product.name}</td>
                            <td>{product.text}</td>
                            <td>{product.img}</td>
                            <td><button className="btn" onClick={handleEdit}>Edit</button></td>
                            <td><button className="btn" onClick={(e) => handleDelete(e,product._id)}>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ProductRow;