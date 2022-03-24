import {ChangeEvent, FC, useState} from 'react';

interface Props {
    name?:string;
    age?:number;
    email?:string;
    // getName:(name:string) => string;
    hairColor: HairColor;
}



export enum HairColor {
    Blonde = "Your hair is blond, good for you!",
    Brown = "Cool hair color",
    Pink = "That's so cool!",

}

export const Person: FC<Props> = ({name,age,email,hairColor}) => {

  const [country, setCountry] = useState<string | null>("");  

  type NameType = "Pedro" | "Jack" | "Manuel"
  const nameForType: NameType = "Pedro" //We can choose eaith pedro or jack or MAnuel


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value)

  }
  return (
    <div>
       <h1> {name} </h1>
       <h1> {email} </h1>
       <h1> {age} </h1>
       <input placeholder='Write down your country...' onChange={handleChange}/>

       {country}
       {hairColor}
       
    </div>
  );
}
