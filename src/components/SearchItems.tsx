import ProductSkeleton from "./Product/ProductSkeleton"
import { Input } from "./ui/input"


interface Props {
  inputValue: string
  setInputValue: (value: string) => void
  isHandling?: boolean
}

const SearchItems = ({ inputValue, setInputValue, isHandling }: Props) => {
  return (
    <div className="relative mt-8 mb-5">
      <Input
        value={inputValue}
        onChange={(e:any) => {
          setInputValue(e.target.value)
        }}
        placeholder="Search movies"
        className="text-base"
      />
      {isHandling && (
        <div className="absolute top-2 right-2">
          <ProductSkeleton />
        </div>
      )}
    </div>
  )
}

export default SearchItems