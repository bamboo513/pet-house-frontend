import { Button } from "@/components/ui/button";

export default function Home() {
  const data = [
    {
      id: 1,
      name: "เล็ก",
      price: 100,
    },
    {
      id: 2,
      name: "กลาง",
      price: 200,
    },
    {
      id: 3,
      name: "ใหญ่",
      price: 300,
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold m-5 flex justify-center">Pet House</h1>
      <div className="border border-gray-200 p-4">
        <p className="flex justify-center text-2xl font-bold mt-2 mb-2">Dog</p>
        {data.map((item) => (
          <div key={item.id} className="flex justify-between border border-gray-200 p-4 m-2">
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="font-bold p-4 mt-5" size="lg" variant="default">Button</Button>
      </div>
    </div>
  );
}
