import { Suspense } from "react";
import Countries from "./components/Countries/Countries";

const CountriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((res) => res.json());

const App = () => {
  return (
    <div>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Countries CountriesPromise={CountriesPromise} />
      </Suspense>
    </div>
  );
};

export default App;
