import React from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import SimpleSelect from "./ui/simpleSelect";
import ".././output.css";
import "../styles/filter.css";
import { useState,useEffect } from "react";

const Filter = () => {
  const [resetKey, setResetKey] = useState(0);

  const initialSelectedValues = {
    make: null,
    model: null,
    year: null,
    price: null,
    mileage: null,
    transmission: null,
    fuelType: null,
    color: null,
  };

  const [selectedValues, setSelectedValues] = useState(initialSelectedValues);

  useEffect(() => {
    console.log('Selected Values:', selectedValues)
  }, [selectedValues]);

  // const handleFilters = () => {
  //   setSelectedValues({ ...selectedValues, year: "2024" });
  // };

  const handleResetFilters = () => {
    console.log("Resetting filters");
    setSelectedValues(initialSelectedValues);
    setResetKey((prevKey) => prevKey+1);
      
    }

  // const handleMakeSelection = (make) => {
  //   console.log("Selected make:", make);
  //   setSelectedValues({ ...selectedValues, make });
  // };

  // const handleModelSelection = (model) => {
  //   console.log("Selected model:", model);
  //   setSelectedValues({ ...selectedValues, model });
  // };

  const makes = [
    { label: "Toyota", value: "toyota" },
    { label: "Ford", value: "ford" },
    { label: "Honda", value: "honda" },
    { label: "Chevrolet", value: "chevrolet" },
    { label: "Mercedes", value: "mercedes" },
  ];

  const models = [
    { label: "Sedan", value: "sedan" },
    { label: "SUV", value: "suv" },
    { label: "Truck", value: "truck" },
    { label: "Coupe", value: "coupe" },
    { label: "Convertible", value: "convertible" },
  ];

  const years = [
    { label: "2024", value: "2024" },
    { label: "2023", value: "2023" },
    { label: "2022", value: "2022" },
    { label: "2021", value: "2021" },
    { label: "2020", value: "2020" },
  ];

  const priceOptions = [
    { label: "Low to High", value: "low" },
    { label: "High to Low", value: "high" },
  ];

  const mileageOptions = [
    { label: "Low to High", value: "low-to-high" },
    { label: "High to Low", value: "high-to-low" },
  ];

  const transmissionOptions = [
    { label: "Automatic", value: "automatic" },
    { label: "Manual", value: "manual" },
  ];

  const fuelTypeOptions = [
    { label: "Gasoline", value: "gasoline" },
    { label: "Diesel", value: "diesel" },
    { label: "Electric", value: "electric" },
    { label: "Hybrid", value: "hybrid" },
  ];

  const colorOptions = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Black", value: "black" },
    { label: "White", value: "white" },
  ];

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
            <SimpleSelect
              key={resetKey}
              options={makes}
              placeholder="Select"
              onSelect={(make) => setSelectedValues({ ...selectedValues, make: make.value })}
              className="w-full"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="model">
              Model
            </Label>
            <SimpleSelect
              key={resetKey}
              options={models}
              placeholder="Select"
              onSelect={(model) => setSelectedValues({ ...selectedValues, model: model.value })}
              className="w-full"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="year">
              Year
            </Label>
            <SimpleSelect
            key={resetKey}
              options={years}
              placeholder="Select"
              onSelect={(year) => setSelectedValues({ ...selectedValues, year: year.value })}
              className="w-full"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="price">
              Price
            </Label>
            <SimpleSelect
            key={resetKey}
              options={priceOptions}
              placeholder="Select"
              onSelect={(price) => setSelectedValues({ ...selectedValues, price: price.value })}
              className="w-full"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="mileage">
              Mileage
            </Label>
            <SimpleSelect
              options={mileageOptions}
              placeholder="Select"
              onSelect={(mileage) => setSelectedValues({ ...selectedValues, mileage: mileage.value })}
              className="w-full"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="transmission">
              Transmission
            </Label>
            <SimpleSelect
            key={resetKey}
              options={transmissionOptions}
              placeholder="Select"
              onSelect={(transmission) => setSelectedValues({ ...selectedValues, transmission: transmission.value })}
              className="w-full"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="fuelType">
              Fuel Type
            </Label>
            <SimpleSelect
            key={resetKey}
              options={fuelTypeOptions}
              placeholder="Select"
              onSelect={(fuelType) => setSelectedValues({ ...selectedValues, fuelType: fuelType.value })}
              className="w-full"
            />
          </div>

          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="color">
              Color
            </Label>
            <SimpleSelect
            key={resetKey}
              options={colorOptions}
              placeholder="Select"
              onSelect={(color) => setSelectedValues({ ...selectedValues, color: color.value })}
              className="w-full"
            />
          </div>

        </div>
        {/* <Button }>
          Reset Filters
        </Button> */}
        <div className="flex justify-between w-full">
          <Button className="self-end" onClick={() => handleResetFilters()}>Reset Filters</Button>
          <Button className="self-end">Apply Filters</Button>
        </div>
      </div>
    </div>
  );
};

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
  );
}

export default Filter;
