import { provide, inject, ref, Ref } from "@vue/composition-api";
import { Cards, Card } from "@/types";

type CardsContext = {
  menus: Ref<Cards>;
  setMenus: (value: Cards) => void;
};

const cardsSymbol = Symbol();
const useHomeProvide = () => {
  const cards = ref<Cards>([]);
  const setCards = (data: Cards) => (cards.value = data);
  provide(cardsSymbol, {
    cards,
    setCards,
  });
};

const useHomeInject = () => {
  const cardsContext = inject<CardsContext>(cardsSymbol);
  if (!cardsContext) {
    throw new Error("useHomeInject must be used after useHomeProvide");
  }
  return cardsContext;
};

export { useHomeProvide, useHomeInject };
