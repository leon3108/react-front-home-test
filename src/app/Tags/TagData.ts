import { TagType } from "./TagType";

export const summer: TagType = {
  id: "summer",
  name: {
    fr: "été",
    en: "summer",
  },
  type: "saison",
  color: "yellow",
};

export const vegan: TagType = {
  id: "vegan",
  name: {
    fr: "vegan",
    en: "vegan",
  },
  type: "diet",
  color: "green",
};

export const appetizer: TagType = {
  id: "appetizer",
  name: {
    fr: "entrée",
    en: "appetizer",
  },
  type: "plateType",
  color: "purple",
};

export const comfort: TagType = {
  id: "comfort",
  name: {
    fr: "PlatRéconfortant",
    en: "ComfortFood",
  },
  type: "plateType",
  color: "#a1c0bd",
};

export const easy: TagType = {
  id: "easy",
  name: {
    fr: "facile",
    en: "easy",
  },
  type: "plateType",
  color: "#a320bd",
};

export const dessert: TagType = {
  id: "dessert",
  name: {
    fr: "dessert",
    en: "appetizer",
  },
  type: "plateType",
  color: "#e320bd",
};

export const autumn: TagType = {
  id: "autumn",
  name: {
    fr: "automne",
    en: "autumn",
  },
  type: "saison",
  color: "orange",
};

export const winter: TagType = {
  id: "winter",
  name: {
    fr: "hiver",
    en: "winter",
  },
  type: "saison",
  color: "blue",
};

export const tagList: TagType[] = [
  summer,
  winter,
  dessert,
  appetizer,
  autumn,
  vegan,
];
