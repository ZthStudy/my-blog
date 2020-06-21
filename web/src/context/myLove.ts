/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-06-19 16:11:29
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-06-21 17:57:30
 */

import { ref, provide, Ref, inject } from "@vue/composition-api";
import { Trips, Trip } from "@/types";

type TripsContext = {
  trips: Ref<Trips>;
  setTrips: (value: Trips) => void;
};

const myLoveSymbol = Symbol();
const useMyLoveProvide = () => {
  const trips = ref<Trips>([]);
  const activeNames: string[] = [];
  const setTrips = (data: Trips) => {
    trips.value = data;
    activeNames.push(data[0].name);
  };
  provide(myLoveSymbol, {
    trips,
    activeNames,
    setTrips,
  });
};

const useMyLoveInject = () => {
  const tripsContext = inject<TripsContext>(myLoveSymbol);
  if (!tripsContext) {
    throw new Error("useMyLoveInject must be used after useHomeProvide");
  }
  return tripsContext;
};

export { useMyLoveProvide, useMyLoveInject };
