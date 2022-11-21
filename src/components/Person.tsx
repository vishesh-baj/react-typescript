import { FC, ChangeEvent, useState } from "react";
import { Props } from "./Interface";

const Person: FC<Props> = ({ age, email, name, hairColor }) => {
  const [country, setCountry] = useState<string | null>(null);
  type NameType = "Vishesh" | "Jack";
  const nameForType: NameType = "Jack";
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  return (
    <>
      <h1>{age}</h1>
      <h1>{email}</h1>
      <h1>{name}</h1>
      <input
        placeholder="Write your own country"
        onChange={handleChange}
        type="text"
        name=""
        id=""
      />
      {country}
      {hairColor}
      {nameForType}
    </>
  );
};

export default Person;
