/**
 * v0 by Vercel.
 * @see https://v0.dev/t/awqP2FD4APA
 */
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "./ui/select"

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
              <SelectContent>
                <SelectItem value="shoes">Shoes</SelectItem>
                <SelectItem value="tops">Tops & T-Shirts</SelectItem>
                <SelectItem value="hoodies">Hoodies & Pullovers</SelectItem>
                <SelectItem value="tracksuits">Tracksuits</SelectItem>
                <SelectItem value="socks">Socks</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-sm text-gray-300">Selected: Shoes</div>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="price">
              Price
            </Label>
            <Select className="w-full" id="price">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low to High</SelectItem>
                <SelectItem value="high">High to Low</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-sm text-gray-300">Selected: Low to High</div>
          </div>
          <div className="grid gap-2">
            <Label className="text-sm" htmlFor="brand">
              Brand
            </Label>
            <Select className="w-full" id="brand">
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nike">Nike</SelectItem>
                <SelectItem value="adidas">Adidas</SelectItem>
                <SelectItem value="puma">Puma</SelectItem>
                <SelectItem value="reebok">Reebok</SelectItem>
                <SelectItem value="under-armour">Under Armour</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-sm text-gray-300">Selected: Nike</div>
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
                <SelectItem value="5">5 stars and up</SelectItem>
                <SelectItem value="4">4 stars and up</SelectItem>
                <SelectItem value="3">3 stars and up</SelectItem>
                <SelectItem value="2">2 stars and up</SelectItem>
                <SelectItem value="1">1 stars and up</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-sm text-gray-300">Selected: 5 stars and up</div>
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
                <SelectItem value="red">Red</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="black">Black</SelectItem>
                <SelectItem value="white">White</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-sm text-gray-300">Selected: Red</div>
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
                <SelectItem value="s">Small</SelectItem>
                <SelectItem value="m">Medium</SelectItem>
                <SelectItem value="l">Large</SelectItem>
                <SelectItem value="xl">Extra Large</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-sm text-gray-300">Selected: Medium</div>
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
                <SelectItem value="in-stock">In Stock</SelectItem>
                <SelectItem value="out-of-stock">Out of Stock</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-sm text-gray-300">Selected: In Stock</div>
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
                <SelectItem value="cotton">Cotton</SelectItem>
                <SelectItem value="polyester">Polyester</SelectItem>
                <SelectItem value="leather">Leather</SelectItem>
                <SelectItem value="wool">Wool</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-sm text-gray-300">Selected: Cotton</div>
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
