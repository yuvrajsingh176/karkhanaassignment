import { useParams } from "react-router";
import Header from "./Header";
import { data } from "../data";
import { Card } from "./Card";

const Product = () => {
  const { id } = useParams<{ id?: string }>();
  const parsedId = id ? parseInt(id, 10) : undefined;

  // Handle the case where parsedId is undefined
  if (parsedId === undefined) {
    return <div>No product found</div>;
  }

  const product = data.filter((product) => product.id === parsedId);

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <div className="w-1/2 h-1/2">
          <Card
            image={product[0].image}
            name={product[0].name}
            price={product[0].price}
            key={product[0].id}
            id={product[0].id}
          />
        </div>
      </div>
    </div>
  );
};
export default Product;
