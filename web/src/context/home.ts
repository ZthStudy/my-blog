import { provide, inject, ref, Ref } from "@vue/composition-api";
import { Cards, Card } from "@/types";
import router from "@/router";

type CardsContext = {
  cards: Ref<Cards>;
  setCards: (value: Cards) => void;
};

const cardsSymbol = Symbol();
const useHomeProvide = () => {
  const cards = ref<Cards>([]);
  const setCards = (data: Cards) => (cards.value = data);
  const toDetail = (card: Card) => {
    if (card.title === "Love") {
      router.push("/myLove");
    }
  };
  provide(cardsSymbol, {
    cards,
    setCards,
    toDetail,
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
