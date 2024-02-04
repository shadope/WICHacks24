import React, { useState, useEffect, StrictMode } from 'react';
import MainNavbar from './MainNavbar';
import InputBox from './InputBox';
import Dropdown from './Dropdown';
import DisplayImage from './DisplayImage';
import catData from "./cat.json"




function HomePage() {
    const [clothesData, setClothesData] = useState(null);
    const [colorChoice, setColorChoice] = useState("");
    const [endData, setEndData] = useState(null);
    const [chosenBrand, setChosenBrand] = useState(null);
    const [chosenType, setChosenType] = useState("");
    const [chosenItem, setChosenItem] = useState("");
    const[chosenImage,setChosenImage] = useState("");

    const colorDict = {"1":"Black","2":"Blue","3":"Green","4":"Red","5":"White"};
    const brandDict = {"1":"Under Armour","2":"Nike", "3":"Adidas","4":"Puma"};
    const typeDict = {"1":"Jackets","2":"Jeans", "3":"Sweater", "4":"T-shirt","5":"Dress"}
    // Function to filter items by color
    function filterItems() {
        console.log("chosen type", chosenType);
    console.log("chosen color", colorChoice);
    console.log("chosen brand", chosenBrand);

    const clother = catData[chosenType]?.[chosenBrand]?.[colorChoice] || [];
    const length = clother.length;

    if (length > 0) {
        const randomIndex = Math.floor(Math.random() * length);
        const randomItem = clother[randomIndex];
        console.log("Randomly chosen item:", randomItem);
        // Assuming setChosenItem is a state setter function
        setChosenItem(randomItem);
        setChosenImage(randomItem["Image"]);
    } else {
        console.log("No items found for the selected criteria.");
    }
}

  

   const handleTypeFilter =(ty)=>{
    console.log("ty beg: ",ty);
    console.log("ty mapping: ",typeDict[ty]);
        setChosenType(typeDict[ty]);
        console.log("setting ty", chosenType);
        filterItems()

   }

    // Handle color filter
    const handleColorFilter = (col) => {
        const temp = Math.floor(Math.random() * 3) + 1
        setChosenBrand(brandDict[temp]);
         setColorChoice(colorDict[col]);
        
    }

    return (
        <div>
            <MainNavbar />
            <InputBox zip="Zip Code" />
            <Dropdown field="Color" one="Black" two="Blue" three="Green" four="Red" five="White" handleColorFilter={handleColorFilter} typeD ="Color"  />
            <Dropdown field="Clothing" one="Jacket" two="Jeans" three="Sweater" four="T-shirt" five="Dress" handleTypeFilter={handleTypeFilter} typeD="Typer"/>
            <DisplayImage sc={chosenImage} />
        </div>
    );
}

export default HomePage;
