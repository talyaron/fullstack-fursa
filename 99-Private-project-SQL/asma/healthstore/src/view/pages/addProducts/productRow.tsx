import { useState } from "react";
import axios from 'axios';
import './productRow.scss'
import Button from "@material-ui/core/Button";

function ProductRow(props: any) {
    const product = props.product;
    const type = props.type;
    const [edit, setEdit] = useState(false);
    const [newProduct, setProduct] = useState({ name: product.name, text: product.text, img: product.img, category: product.category });

    const [selectedImage, setImage] = useState('');

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
        const name = ev.target.elements.name.value;
        const text = ev.target.elements.text.value;
        const category = ev.target.elements.category.value;

        const formData =new FormData();
        //if(selectedImage)
        formData.append('image', selectedImage );
        formData.append('id', id );
        formData.append('name', name );
        formData.append('text', text );
        formData.append('category', category );
        formData.append('selectedImage', selectedImage );
        console.log('selectedImage',selectedImage,id,formData)
        const config = { headers: { 'content-type': 'multipart/form-data' } }

        const { data } = await axios.patch('/update-product', formData,config);
        console.log(data)
        setEdit(!edit);
    }


    async function handleDelete(ev: any, id: any) {
        console.log('delete')
        ev.preventDefault();
        const { data } = await axios.post(`/delete-${type}`, { id: id });
        console.log(data)
    }
    return (
        <div className="productCard">
            {edit ? (
                <form onSubmit={handleUpdate} id={product.id}>
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
                        <tr key={product.id} >
                            <td>{product.name}</td>
                            <td>{product.text}</td>
                            <td>{product.category}</td>
                            <td>{product.img}</td>
                            <td><button className="btn" onClick={handleEdit}>Edit</button></td>
                            <td><button className="btn" onClick={(e) => handleDelete(e, product.id)}>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ProductRow;