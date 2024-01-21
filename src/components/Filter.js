/**
 * v0 by Vercel.
 * @see https://v0.dev/t/awqP2FD4APA
 */
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "./ui/select";
import ".././output.css";

const Filter = () => {
  return (
    <div className="p-4 bg-black text-white shadow-md rounded-md">
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
            <Label className="text-sm" htmlFor="category">
              Category
            </Label>
            <Select className="w-full" id="category">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="shoes" className="text-black">Shoes</SelectItem>
                <SelectItem value="tops"  className="text-black">Tops & T-Shirts</SelectItem>
                <SelectItem value="hoodies"  className="text-black">Hoodies & Pullovers</SelectItem>
                <SelectItem value="tracksuits" className="text-black">Tracksuits</SelectItem>
                <SelectItem value="socks" className="text-black">Socks</SelectItem>
              </SelectContent>
            </Select>
            {/* <div className="text-sm text-gray-300">Selected: Shoes</div> */}
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
            {/* <div className="text-sm text-gray-300">Selected: Low to High</div> */}
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="brand">
              Brand
            </Label>
            <Select className="w-full" id="brand">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-white"> 
                <SelectItem className="text-black" value="nike">Nike</SelectItem>
                <SelectItem className="text-black" value="adidas">Adidas</SelectItem>
                <SelectItem className="text-black" value="puma">Puma</SelectItem>
                <SelectItem className="text-black" value="reebok">Reebok</SelectItem>
                <SelectItem className="text-black" value="under-armour">Under Armour</SelectItem>
              </SelectContent>
            </Select>
            {/* <div className="text-sm text-gray-300">Selected: Nike</div> */}
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="rating">
              Rating
            </Label>
            <Select className="w-full" id="rating">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-white" value="5">5 stars and up</SelectItem>
                <SelectItem className="text-white" value="4">4 stars and up</SelectItem>
                <SelectItem className="text-white" value="3">3 stars and up</SelectItem>
                <SelectItem className="text-white" value="2">2 stars and up</SelectItem>
                <SelectItem className="text-white" value="1">1 stars and up</SelectItem>
              </SelectContent>
            </Select>
            {/* <div className="text-sm text-gray-300">Selected: 5 stars and up</div> */}
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="color">
              Color
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-white" value="red">Red</SelectItem>
                <SelectItem className="text-white" value="blue">Blue</SelectItem>
                <SelectItem className="text-white" value="green">Green</SelectItem>
                <SelectItem className="text-white" value="black">Black</SelectItem>
                <SelectItem className="text-white" value="white">White</SelectItem>
              </SelectContent>
            </Select>
            {/* <div className="text-sm text-gray-300">Selected: Red</div> */}
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="size">
              Size
            </Label>
            <Select className="w-full" id="size">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-white" value="s">Small</SelectItem>
                <SelectItem className="text-white" value="m">Medium</SelectItem>
                <SelectItem className="text-white" value="l">Large</SelectItem>
                <SelectItem className="text-white" value="xl">Extra Large</SelectItem>
              </SelectContent>
            </Select>
            {/* <div className="text-sm text-gray-300">Selected: Medium</div> */}
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="availability">
              Availability
            </Label>
            <Select className="w-full" id="availability">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-white" value="in-stock">In Stock</SelectItem>
                <SelectItem className="text-white"value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
            {/* <div className="text-sm text-gray-300">Selected: In Stock</div> */}
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="material">
              Material
            </Label>
            <Select className="w-full" id="material">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-white" value="cotton">Cotton</SelectItem>
                <SelectItem className="text-white" value="polyester">Polyester</SelectItem>
                <SelectItem className="text-white"value="leather">Leather</SelectItem>
                <SelectItem className="text-white" value="wool">Wool</SelectItem>
              </SelectContent>
            </Select>
            {/* <div className="text-sm text-gray-300">Selected: Cotton</div> */}
          </div>
        </div>
        <Button className="self-end">Reset Filters</Button>
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

export default Filter
