import { provide, inject, ref, Ref } from "@vue/composition-api";
import { Menus, Menu } from "@/types";

type MenusContext = {
  menus: Ref<Menus>;
  setMenus: (value: Menus) => void;
};

const menusSymbol = Symbol();
const useMenusProvide = () => {
  const menus = ref<Menus>([]);
  const setMenus = (data: Menus) => (menus.value = data);
  provide(menusSymbol, {
    menus,
    setMenus,
  });
};

const useMenusInject = () => {
  const menusContext = inject<MenusContext>(menusSymbol);
  if (!menusContext) {
    throw new Error("useMenusInject must be used after useMenuProvide");
  }
  return menusContext;
};

export { useMenusProvide, useMenusInject };
