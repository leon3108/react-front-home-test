import { TagType } from "./TagType";

export const summer: TagType = {
  id: "summer",
  name: {
    fr: "été",
    en: "summer",
  },
  type: "season",
  color: "#FFFF00",
};

export const vegan: TagType = {
  id: "vegan",
  name: {
    fr: "vegan",
    en: "vegan",
  },
  type: "diet",
  color: "#008000",
};

export const appetizer: TagType = {
  id: "appetizer",
  name: {
    fr: "entrée",
    en: "appetizer",
  },
  type: "plateType",
  color: "#800080",
};

export const comfort: TagType = {
  id: "comfort",
  name: {
    fr: "Réconfortant",
    en: "Comfort",
  },
  type: "plateType",
  color: "#808080",
};

export const sugarType: TagType = {
  id: "sugar",
  name: {
    fr: "sucre",
    en: "sugar",
  },
  type: "plateType",
  color: "#808080",
};

export const chocolateDessert: TagType = {
  id: "chocolateDessert",
  name: {
    fr: "dessert au chocolat",
    en: "chocolateDessert",
  },
  type: "plateType",
  color: "#0000ff",
};

export const easy: TagType = {
  id: "easy",
  name: {
    fr: "facile",
    en: "easy",
  },
  type: "plateType",
  color: "#582900",
};

export const dessert: TagType = {
  id: "dessert",
  name: {
    fr: "dessert",
    en: "appetizer",
  },
  type: "plateType",
  color: "#FFC0CB",
};

export const autumn: TagType = {
  id: "autumn",
  name: {
    fr: "automne",
    en: "autumn",
  },
  type: "season",
  color: "#ED7F10",
};

export const winter: TagType = {
  id: "winter",
  name: {
    fr: "hiver",
    en: "winter",
  },
  type: "season",
  color: "#0000ff",
};

export const eggsFree: TagType = {
  id: "eggs free",
  name: {
    fr: "sans oeufs",
    en: "eggs free",
  },
  type: "season",
  color: "#0000ff",
};



export const tagList: TagType[] = [
  summer,
  winter,
  dessert,
  appetizer,
  autumn,
  vegan,
  easy,
  comfort,
  chocolateDessert,
  sugarType,
  eggsFree,
];
