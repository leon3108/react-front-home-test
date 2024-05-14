import { Button } from "@/components/ui/button";
import { useContext } from 'react';
import { FilterContext } from './filterContextProvider';

export default function UpdateFilter() {
  const filterContext = useContext(FilterContext);
  if (filterContext === undefined) {
    return;
  }
  const {filter, setFilter} = filterContext;


  return (
  <section className="flex justify-center space-x-1">
    <Button onClick={() => setFilter([...filter, "chocolate"])}>Dessert au Chocolat</Button>
    <Button onClick={() => setFilter([...filter, "easy"])}>facile</Button>
    <Button onClick={() => setFilter([...filter, "comfort"])}>réconfortant</Button>
    <Button onClick={() => setFilter([...filter, "winter"])}>hiver</Button>
    <Button onClick={() => setFilter([...filter, "appetizer"])}>entrée</Button>
    <Button onClick={() => setFilter([...filter, "sugar"])}>Sucre</Button>
    <Button onClick={() => setFilter([...filter, "summer"])}>Eté</Button>
    <Button onClick={() => setFilter([...filter, "dessert"])}>Dessert</Button>
    <Button onClick={() => setFilter([...filter, "eggs free"])}>Sans Oeufs</Button>
    <Button onClick={() => setFilter([...filter, "autumn"])}> automne</Button>
    <Button onClick={() => setFilter([...filter, "vegan"])}> Vegan</Button>
  </section>
  )
}