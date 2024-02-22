import { Card } from "./Card";
import { data } from '../data';

interface Data {
  id: number; 
  name: string;
  image: string;
  price: number;
}

export const HomeBody = () => {
  return (
    <div className="container w-full grid grid-cols-4 mx-auto gap-6">
      {data.map((item: Data) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};
