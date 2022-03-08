import { useState } from "react";
import axios from "axios";

function CatRow(props: any) {
  const { cat } = props;
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(!edit);
  }

  async function handleUpdate(ev: any) {
    ev.preventDefault();
    const id = ev.target.id;
    const name = ev.target.elements.name.value;
    const city = ev.target.elements.city.value;

    const { data } = await axios.patch("/update-cat", { name, city, id });
    console.log(data);
  }

  async function handleDelete(id: any) {
    console.log("delete");
    const { data } = await axios.post("/delete-cat", { id: id });
    console.log(data);
  }
  return (
    <div className="catCard">
      {edit ? (
        <form onSubmit={handleUpdate} id={cat._id}>
          <input type="text" placeholder="name of cat" name="name" />
          <input type="text" placeholder="city" name="city" />
          <button type="submit">Update</button>
          <button onClick={() => handleDelete(cat._id)}>Delete</button>
        </form>
      ) : (
        <p key={cat._id}>
          {cat.name}, lives in {cat.address?.city}
          <button onClick={handleEdit}>Edit</button>
        </p>
      )}
    </div>
  );
}

export default CatRow;
