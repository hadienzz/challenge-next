'use client'

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

const ImagePicker = ({ label, name }) => {
    const [pickedImage, setPickedImage] = useState(null)

    const imageInput = useRef()

    const handlePickClick = () => {
        imageInput.current.click()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]

        if (!file) return

        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)

        }
        fileReader.readAsDataURL(file)
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}></label>
            <div className={classes.controls}>
                {!pickedImage ?
                    <div className={classes.preview}>{label}</div> :
                    <div className={classes.preview}><Image src={pickedImage} fill /></div>
                }
                <input type="file" id={name} accept='image/png, image/jpeg' name={name} className={classes.input} ref={imageInput} onChange={handleImageChange} required />
                <button className={classes.button} onClick={handlePickClick} type='button'>Pick an image</button>
            </div>
        </div>
    )
}

export default ImagePicker