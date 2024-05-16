import { TagType } from "./TagType";

export const summer: TagType = {
  id: "summer",
  name: {
    fr: "été",
    en: "summer",
  },
  type: "season",
};

export const vegan: TagType = {
  id: "vegan",
  name: {
    fr: "vegan",
    en: "vegan",
  },
  type: "diet",
};

export const appetizer: TagType = {
  id: "appetizer",
  name: {
    fr: "entrée",
    en: "appetizer",
  },
  type: "plateType",
};

export const comfort: TagType = {
  id: "comfort",
  name: {
    fr: "Réconfortant",
    en: "Comfort",
  },
  type: "plateType",
};

export const sugarType: TagType = {
  id: "sugar",
  name: {
    fr: "sucre",
    en: "sugar",
  },
  type: "plateType",
};

export const chocolateDessert: TagType = {
  id: "chocolateDessert",
  name: {
    fr: "dessert au chocolat",
    en: "chocolateDessert",
  },
  type: "plateType",
};

export const easy: TagType = {
  id: "easy",
  name: {
    fr: "facile",
    en: "easy",
  },
  type: "plateType",
};

export const dessert: TagType = {
  id: "dessert",
  name: {
    fr: "dessert",
    en: "appetizer",
  },
  type: "plateType",
};

export const autumn: TagType = {
  id: "autumn",
  name: {
    fr: "automne",
    en: "autumn",
  },
  type: "season",
};

export const winter: TagType = {
  id: "winter",
  name: {
    fr: "hiver",
    en: "winter",
  },
  type: "season",
};

export const eggsFree: TagType = {
  id: "eggs free",
  name: {
    fr: "sans oeufs",
    en: "eggs free",
  },
  type: "season",
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
