/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-05-12 10:45:27
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-05-12 10:45:28
 */
type Menus = Menu[];
type Menu = {
  id: number;
  route: string;
  name: string;
};

export { Menus, Menu };
