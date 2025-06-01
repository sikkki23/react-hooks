import React,   { useRef, useState }from 'react'


const Index = () => {
    const imageRef = useRef(null);

const [isFirstImage, setisFirestImage] = useState(true);

const changeImage = () => {
     console.log(imageRef.current.src , isFirstImage);
    if (imageRef.current) {
       
        imageRef.current.src = isFirstImage ? "https://media.istockphoto.com/id/2162944052/photo/wood-texture-background-top-view-of-vintage-wooden-table-with-cracks-surface-of-old-knotted.jpg?s=1024x1024&w=is&k=20&c=CeqeZWmkB_sVAdHt12GBHEarzqLcOCnxOZW2mADJZlI=" :
         "https://cdn.pixabay.com/photo/2024/12/19/17/48/mountain-9278324_1280.jpg";
    
        setisFirestImage(!isFirstImage);    
        }
}

  return (
    <div>
        <h2>Change Image using useRef</h2>
        <img src="https://media.istockphoto.com/id/2162944052/photo/wood-texture-background-top-view-of-vintage-wooden-table-with-cracks-surface-of-old-knotted.jpg?s=1024x1024&w=is&k=20&c=CeqeZWmkB_sVAdHt12GBHEarzqLcOCnxOZW2mADJZlI=" ref={imageRef}  alt ="" />
   
    <button onClick={changeImage} >ChangeButton</button>
    </div>
  )
}

export default Index