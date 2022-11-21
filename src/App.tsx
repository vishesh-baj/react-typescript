import { FC, createContext } from "react";
import { HairColor } from "./components/Emuns";
import Person from "./components/Person";
interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}
const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: "Vishesh",
    age: 20,
    country: "India",
  };
  // const name: string = "Vishesh";
  // const age: number = 12;
  // const isMarried: boolean = false;

  // const getName = (name: string) => {
  //   if (name === "Vishesh") return 20;
  //   else return 0;
  // };
  return (
    <AppContext.Provider value={contextValue}>
      <div>
        <Person
          hairColor={HairColor.Green}
          name="Vishesh"
          age={23}
          email="vishesh@gmail.com"
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
