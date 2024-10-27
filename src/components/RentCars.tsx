import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import carsData from "@/components/data/cars.json";
import Image from "next/image";

function RentCars() {
  const brands = ["honda", "toyota", "audi", "hyundai", "suzuki"];

  return (
    <div className="w-full min-h-screen bg-neutral-100 mb-10">
      <div className="w-full h-[15rem] flex flex-col justify-center items-center bg-black text-white mb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Top Rental Cars</h1>
        <p className="max-w-md text-center">
          We offer premium cars of Toyota, Audi, Honda, Hyundai to make your journey comfortable.
        </p>
      </div>

      <Tabs defaultValue="honda" className="px-4">
        <TabsList className="flex flex-wrap justify-center gap-4 p-2 bg-white mb-10 h-[10rem] md:h-[5rem]">
          {brands.map((brand) => (
            <TabsTrigger
              key={brand}
              value={brand}
              className="px-10 md:px-20 py-3 rounded-md font-semibold text-center text-sm md:text-lg transition-colors duration-200
                data-[state=active]:bg-[#006FFF] data-[state=active]:text-white 
                data-[state=inactive]:bg-white data-[state=inactive]:text-black shadow-lg"
            >
              {brand.charAt(0).toUpperCase() + brand.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        {brands.map((brand) => (
          <TabsContent key={brand} value={brand}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {carsData.cars
                .filter((car) => car.Company.toLowerCase() === brand)
                .map((car) => (
                  <Card key={car.id} className="shadow-lg flex flex-col justify-center items-center">
                    <CardHeader>
                      <Image 
                        src={car.image}
                        width={400}
                        height={400}
                        alt={car.title}
                      />
                      <CardTitle className="text-2xl">{car.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg">
                        Model: {car.model}   | Fuel Type: {car.feulType} |   Transmission: {car.transmissionType}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="w-full">
                      <Button className="w-full">Rent Now</Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default RentCars;

