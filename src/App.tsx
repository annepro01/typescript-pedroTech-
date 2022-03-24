import React, {FC, createContext} from 'react';
import './App.css';
import { Person, HairColor } from './components/Persons';

interface AppContextInterface {
    name: string;
    age:number;
    country:string;

}

// const AppContext = createContext<AppContextInterface | null>  (null)
const AppContext = createContext<any>  (null)

const App: FC = () => {

  const contextValue: AppContextInterface = {
    name: "Pedro",
    age: 20,
    country: "Brazil"
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
      <Person name="Pedro" age={20} email="pedroemail@gmail.com" hairColor={HairColor.Blonde}/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
