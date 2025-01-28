import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  make: string;
  price: number;
}

export default async function Products() {
  const carImages: { [key: string]: string } = {
    Toyota: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg",
    Honda: "/p6.png", 
    Ford: "/p7.png",
    Chevrolet: "/p5.png",
    Nissan: "/p4.png",
  };

  const fetchdata = await fetch("https://freetestapi.com/api/v1/cars?limit=5");
  const res: Product[] = await fetchdata.json();

  return (
    <>
      <div className="gap-5 grid lg:grid-cols-3 p-12">
        {res.map((val: any) => (
          <div
            key={val.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`products/${val.id}`}>
              <div>
                <Image
                  className="p-8 rounded-t-lg w-[400px] h-[400px]"
                  src={carImages[val.make] || "https://fakeimg.pl/400x400/"}
                  alt={val.make}
                  height={200}
                  width={200}
                />
              </div>
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {val.make}
                </h5>
                <div className="flex items-center mt-2.5 mb-5">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    5.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${val.price}
                  </span>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
