/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-06-21 17:59:02
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-06-21 17:59:33
 */

import axios from "axios";

const queryTrips = () => {
  return axios.get("/api/mylove/trips");
};

export { queryTrips };
