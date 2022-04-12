<<<<<<< HEAD
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl, pizzaApi } from '../../constants/api';
import css from './CreatePizza.module.css'
import axios from 'axios';
import { Api } from '../../api/Api';

const Createpizza = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [des, setDes] = useState("")
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState("")


    const navigate = useNavigate();


    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title)
        formData.append("price", price)
        formData.append("des", des)
        formData.append("img", image);
        // fetch(baseUrl + pizzaApi, {
        //     method: "POST",
        //     body: formData,
        // })
        //     .finally(() => {
        //     navigate("/dashboard")
        //     })
        Api.post(pizzaApi, {title, price, des} )
            .finally(() => {
                navigate("/dashboard")
            })
    }

    const titleChange = (e) => {
        setTitle(e.target.value)
    }
    const priceChange = (e) => {
        setPrice(e.target.value)
    }
    const desChange = (e) => {
        setDes(e.target.value)
    }

    const imageChange = (e) => {
        console.log(e.target.files);
        const image = e.target.files[0]
        setImage(image)

        const reader = new FileReader();
        reader.readAsDataURL(image)
        reader.onload = (e) => {
            setImageUrl(e.target.result)
        };
    }

    const urlDownload = 'https://cdn-icons-png.flaticon.com/512/1092/1092004.png'
    return (
        <form onSubmit={submit} className={`container mt-5 mb-5 ${css.add_pizza}`}>
            <h1>Create New Pizza</h1>
            <h4>Add photo PIZZA</h4>
            <input
                className="d-none"
                type="file"
                id='file'
                onChange={imageChange}
            />
            <label className={css.imageDownload} htmlFor="file">
                <img width="120px" src={imageUrl || urlDownload} alt="" />
            </label>
            <div className={css.input}>
                <h4>Title</h4>
                <input
                    type="text"
                    placeholder='Please enter the name for pizza'
                    value={title}
                    onChange={titleChange} />
                <h4>Price</h4>
                <input
                    type="number"
                    placeholder='Please enter the price for pizza'
                    value={price}
                    onChange={priceChange} />
                <h4>Description</h4>
                <input
                    type="text"
                    placeholder='Please enter the description for pizza'
                    value={des}
                    onChange={desChange} />
                <div className={css.btn}>
                    <button>Create pizza</button>
                </div>
            </div>
        </form>
    );
}

export default Createpizza;
=======
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { baseUrl, pizzaApi } from "../../constants/api.js";
import css from "./CreatePizza.module.css"
import { Api } from "../../api/Api.js";

export default function CreatePizza() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name)
    formData.append("price", price)
    formData.append("description", description)
    formData.append("img", image);
    // fetch(baseUrl + pizzaApi, {
    //   method: "POST",
    //   body: formData
    // })
    //   .finally(() => {
    //     navigate("/dashboard")
    //   })

    Api.post(pizzaApi, {name, price, description})
      .finally(() => {
        navigate("/dashboard")
      })
  }

  const nameChange = (e) => {
    setName(e.target.value)
  }
  const priceChange = (e) => {
    setPrice(e.target.value)
  }
  const desChange = (e) => {
    setDescription(e.target.value)
  }
  const imageChange = (e) => {
    console.log(e.target.files);
    const image = e.target.files[0]
    setImage(image);

    const reader = new FileReader();
    reader.readAsDataURL(image)
    reader.onload = (e) => {
      setImageUrl(e.target.result)
    };
  }
  const urlDowload = "https://cdn-icons.flaticon.com/png/512/1817/premium/1817425.png?token=exp=1649500618~hmac=5d93854ca692f01edfd6fda319bed27f"

  return (
    <form onSubmit={submit} className="container mt-5 mb-5">
      <input
        className="d-none"
        type="file"
        id="file"
        onChange={imageChange}
      />
      <label className={css.imageDowload} htmlFor="file">
        <img width="100px" src={imageUrl || urlDowload} alt="" />
      </label>

      <label className={css.inputWrapper}>
        <span>Name</span>
        <input
          type="text"
          placeholder="Please enter the name for pizza"
          value={name}
          onChange={nameChange}
        />
      </label>
      <label className={css.inputWrapper}>
        <span>Price</span>
        <input
          type="text"
          placeholder="Please enter the price for pizza"
          value={price}
          onChange={priceChange}
        />
      </label>
      <label className={css.inputWrapper}>
        <span>Description</span>
        <input
          type="text"
          placeholder="Please enter the name for pizza"
          value={description}
          onChange={desChange}
        />
      </label>

      <button className="btn btn-success">Создать Пиццу</button>

    </form>
  )
}
>>>>>>> d7a56aded6841d73b7ba1505428fbf680485c908
