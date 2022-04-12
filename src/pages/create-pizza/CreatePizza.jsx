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
