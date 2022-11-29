import React, {  useState } from "react";
import axios from 'axios';
import './addCategory.css'
import Nav from '../Admin-Nav/nav'
import ImageUpload from "./ImageUpload";
import { AiOutlineCaretLeft } from "react-icons/ai";

function AddCategory() {

  const [category_name, setCategoryName] = useState('');

  const iconBtn = () => {
    window.location.replace("http://localhost:3000/#/adminjob");
  };
  const handleNameChange = (value) => {
    setCategoryName(value);
  }

  // const base64Data = localStorage.getItem('CategoryImgBase64')

  const handleSave = () => {
// console.log(localStorage.getItem('CategoryImgBase64'))


    const data = {

      CategoryName:category_name,
      Openings:0,
      CategoryImage:localStorage.getItem('CategoryImgBase64')
      
    };

    if(data.CategoryName===""||data.CategoryImage==="")
    {
      alert("Enter all fields")
      window.location.replace("http://localhost:3000/#/adminjob");
    }
    else{

   
    const url = 'https://localhost:5001/GBSJobs/v1/savecategory';
    axios.post(url, data).then((response) => {
      console.log(data);
      console.log(response.data); 
      if (response.data.Success === true) {
        alert("Successfully Added")

      }

    })
  }

  // https://localhost:5001/GBSJobs/v2/getopeningscount
  const url2 = 'https://localhost:5001/GBSJobs/v2/getopeningscount';
  axios.get(url2).then((response) => {
    console.log(data);
    console.log(response.data); 

  })

  }

  return (
    <div>
<Nav/>
<div className='BacktoAdminJob-icon' id='iconBtn' onClick={iconBtn}><AiOutlineCaretLeft /></div>
<div className='cat-container'>
  <h1 className='h1'> Add New Category</h1>
<div className='Category-name'>Category name :
    <input className='Cat-box' type="text" onChange={(e) => handleNameChange(e.target.value)}/>
 </div>
 <div className='Category-image'>Upload Image :</div>
 {/* <input className='upload' type='file'></input> */}
 <ImageUpload />
 </div>
 <button className='cat-btn' onClick={() => handleSave()}> Add</button>

{/* {base64Data != null && <img src={`data:image;base64,${base64Data}`} alt='CategoryImage'/>}  */}

    </div>
  )
}

export default AddCategory