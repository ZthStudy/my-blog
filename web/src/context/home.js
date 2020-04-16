import { provide, inject, ref } from "@vue/composition-api";

const menusSymbol = Symbol();
const useMenusProvide = () => {
  const menus = ref([]);
  const setMenus = (data) => (menus.value = data);
  provide(menusSymbol, {
    menus,
    setMenus,
  });
};

const useMenusInject = () => {
  const menusContext = inject(menusSymbol);
  if (!menusContext) {
    throw new Error("useMenusInject must be used after useMenuProvide");
  }
  return menusContext;
};

export { useMenusProvide, useMenusInject };
