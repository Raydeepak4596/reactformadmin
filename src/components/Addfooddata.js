import React, { useState } from 'react'
import './Addfooddata.css'
import {db, storage} from './FirebaseConfig'
import { addDoc,collection } from 'firebase/firestore/lite'
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
const Addfooddata = () => {
    const[foodname,setfoodname]=useState('')
    const[fooddescription,setfooddescription]=useState('')
    const[price,setprice]=useState('')
    const[restaname,setrestaname]=useState('')
    const[foodimage,setfoodimage]=useState(null)
    const [foodimageUrl,setfoodimageUrl]=useState('')
   
    const handle=(e)=>{
        e.preventDefault()
        if (foodimage == null){
            alert('Please select image')

        }
        else{
            const foodimg = ref(storage,`FoodPhotos/${foodimage.name}`)
            uploadBytes(foodimg,foodimage)
            .then(()=>{
               
                getDownloadURL(foodimg).then((url)=>{
                    // console.log(url)
                    setfoodimageUrl(url)

                    const fooddata = {
                        foodname,
                        fooddescription,
                        price,
                        restaname,
                      foodimageUrl:url
                    }
                  try{
                  addDoc(collection(db,"FoofFolder"),fooddata)
                    alert('data added successfully')
                  
                  }
                  catch(error){
                    alert(error)
                  }
                }).catch((error)=>{
                    alert(error)
                })
            })
            .catch((error)=>{
                alert("not upload")
            })
        }
    
    }
   



    return (
        <div className='form-outer'>
            <h1>Addfooddata</h1>
            <form className='form-inner'>
                <label>Food Name</label>
                <input type="text" name="food-name" onChange={(e)=>{setfoodname(e.target.value)}}></input>
                <br></br>
                <label>Food Description</label>
                <input type='text' name='food-description' onChange={(e)=>{setfooddescription(e.target.value)}}></input><br/>
                <label>Price</label><br></br>
                <input type='text' name='Food price' onChange={(e)=>{setprice(e.target.value)}}></input><br/>
                <label>Food Image</label>
                <input type='file' name='food-image' onChange={(e)=>{setfoodimage(e.target.files[0])}}></input><br/>
                <label>Restaurent Name</label>
                <input type='text' name='restaurent-name'onChange={(e)=>{setrestaname(e.target.value)}}></input><br/>
                <input type='submit' name='submit' onClick={handle}></input>
            </form>
        </div>
    )
}

export default Addfooddata