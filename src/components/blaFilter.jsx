/**
 * v0 by Vercel.
 * @see https://v0.dev/t/awqP2FD4APA
 */
import React from "react";
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "./ui/select";
import ".././output.css";
import "../styles/filter.css"
import { useState } from "react";


const Filter = () => {
  const initialSelectedValues = {
    make: null,
    model: null,
    year: null,
    // price: null,
    // mileage: null,
    // transmission: null,
    // fuelType: null,
    // color: null,
  };

  const [selectedValues, setSelectedValues] = React.useState(
    initialSelectedValues
  );

  const handleFilters = () => {
    console.log("ayyadaa");
    setSelectedValues({...selectedValues,year:"2024"})
    
  } 
  const handleResetFilters = () => {
    console.log("Resetting filters");
    // Reset the selected values to their initial state
    setSelectedValues(initialSelectedValues);
  };

  const handleMakeSelection = (make) => {
    console.log("Selected make:", make);
    setSelectedValues({ ...selectedValues, make });
  };
  
  const handleModelSelection = (model) => {
    console.log("Selected model:", model);
    setSelectedValues({ ...selectedValues, model });
  };

  return (
    <div className="p-4 text-white shadow-md rounded-md search-filter">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <h2 className="font-semibold text-lg">Filters</h2>
          <Button size="icon" variant="outline">
            <FilterIcon className="h-4 w-4" />
            <span className="sr-only">Toggle filters</span>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">

  <Label className="text-sm" htmlFor="make">
    Make
  </Label>
  <Select className="w-full" id="make">
    <SelectTrigger>
      <SelectValue placeholder="Select"/>
      
    </SelectTrigger>
    <SelectContent className="bg-white">
      <div onClick={() => console.log("Toyotaaa")}>
        Toyota
      </div>
      <SelectItem value="ford" className="text-black" onClick= {() =>console.log("foerd") } >
        Ford
      </SelectItem>
      <SelectItem value="honda" className="text-black" onClick={() =>  handleMakeSelection("Todff")}>
        Honda
      </SelectItem>
      <SelectItem value="chevrolet" className="text-black" onClick={() =>  handleMakeSelection("Trf")}>
        Chevrolet
      </SelectItem>
      <SelectItem value="mercedes" className="text-black" onClick={() =>  handleMakeSelection("tth")}>
        Mercedes
      </SelectItem>
    </SelectContent>
  </Select>
</div>


        <div className="grid gap-2">
          <Label className="text-sm" htmlFor="model">
            Model
          </Label>
          <Select className="w-full" id="model">
            <SelectTrigger>
              <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectItem className="text-black" value="sedan">Sedan</SelectItem>
      <SelectItem className="text-black" value="suv">SUV</SelectItem>
      <SelectItem className="text-black" value="truck">Truck</SelectItem>
      <SelectItem className="text-black" value="coupe" >Coupe</SelectItem>
      <SelectItem className="text-black" value="convertible">Convertible</SelectItem>
    </SelectContent>
  </Select>
  {/* <div className="text-sm text-gray-300">Selected: Sedan</div> */}
</div>
 <div className="grid gap-2">
  <Label className="text-sm" htmlFor="year">
    Year
  </Label>
  <Select className="w-full" id="year">

    <SelectTrigger>
      <SelectValue placeholder="Select" />
    </SelectTrigger>

    <SelectContent className="bg-white">
      <SelectItem className="text-black" value="2024" onClick={() => handleFilters()}>2024</SelectItem>
      <SelectItem className="text-black" value="2023">2023</SelectItem>
      <SelectItem className="text-black" value="2022">2022</SelectItem>
      <SelectItem className="text-black" value="2021">2021</SelectItem>
      <SelectItem className="text-black" value="2020">2020</SelectItem>
    </SelectContent>
  </Select>
</div>

         <div className="grid gap-2">
            <Label className="text-sm" htmlFor="price">
              Price
            </Label>
            <Select className="w-full" id="price">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem className="text-black" value="low">Low to High</SelectItem>
                <SelectItem className="text-black" value="high">High to Low</SelectItem>
              </SelectContent>
            </Select>
            
          </div>
          <div className="grid gap-2">
  <Label className="text-sm" htmlFor="mileage">
    Mileage
  </Label>
  <Select className="w-full" id="mileage">
    <SelectTrigger>
      <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectItem className="text-black" value="low-to-high">Low to High</SelectItem>
      <SelectItem className="text-black" value="high-to-low">High to Low</SelectItem>
    </SelectContent>
  </Select>
  
</div>
<div className="grid gap-2">
  <Label className="text-sm" htmlFor="transmission">
    Transmission
  </Label>
  <Select className="w-full" id="transmission">
    <SelectTrigger>
      <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectItem className="text-black" value="automatic">Automatic</SelectItem>
      <SelectItem className="text-black" value="manual">Manual</SelectItem>
    </SelectContent>
  </Select>
 
</div>
<div className="grid gap-2">
  <Label className="text-sm" htmlFor="fuelType">
    Fuel Type
  </Label>
  <Select className="w-full" id="fuelType">
    <SelectTrigger>
      <SelectValue placeholder="Select" />
    </SelectTrigger>
    <SelectContent className="bg-white">
      <SelectItem className="text-black" value="gasoline">Gasoline</SelectItem>
      <SelectItem className="text-black" value="diesel">Diesel</SelectItem>
      <SelectItem className="text-black" value="electric">Electric</SelectItem>
      <SelectItem className="text-black" value="hybrid">Hybrid</SelectItem>
    </SelectContent>
  </Select>
</div>

          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="color">
              Color
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem className="text-black" value="red">Red</SelectItem>
                <SelectItem className="text-black" value="blue">Blue</SelectItem>
                <SelectItem className="text-black" value="green">Green</SelectItem>
                <SelectItem className="text-black" value="black">Black</SelectItem>
                <SelectItem className="text-black" value="white">White</SelectItem>
              </SelectContent>
            </Select>
      
          </div>
        </div>
        <Button className="self-end" onClick={handleResetFilters}>Reset Filters</Button>
      </div>
    </div>
  )
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

export default Filter;
