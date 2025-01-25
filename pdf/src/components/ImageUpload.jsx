import React from 'react'

const ImageUpload = ({setImage}) => {

const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
        setImage(reader.result);
    }

}

  return <div className="imageUpload">
    <label className="configLabel">
                Upload Image:
                <input type="file" accept='image/*' className="fileInput" onChange={handleImageChange}/>
            </label>
  </div>

}

export default ImageUpload
