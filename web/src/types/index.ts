/*
 * @Description:
 * @version: 1.0.0
 * @Author: zhangtianhou
 * @Date: 2020-05-12 10:45:27
 * @LastEditors: zhangtianhou
 * @LastEditTime: 2020-06-19 16:23:24
 */
type Cards = Card[];
type Card = {
  imgSrc: string;
  title: string;
  content: string;
};
type Trips = Trip[];
type Trip = {
  name: string;
  title: string;
  children: SubTrip[];
};
type SubTrip = {
  subTitle: string;
  timestamp: string;
  imageSrcs: string[];
};

export { Cards, Card, Trips, Trip };
