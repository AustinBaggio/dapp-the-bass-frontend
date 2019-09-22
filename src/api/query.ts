import axios from "axios";
import { IUserInfo } from "./query";

const baseURL =
  process.env.REACT_APP_API_HOST || `http://${window.location.hostname}:1317`;
const instance = axios.create({ baseURL: `${baseURL}` });
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export interface Response {
  height: string;
  result: IUserInfo;
}

export interface IUserInfo {
  value?: string;
  owner?: string;
  price?: [ICoins];
}

export interface ICoins {
  denom?: string;
  amount?: string;
}

export async function getWhois(name: string): Promise<IUserInfo> {
  let data: IUserInfo = {};

  const res = await instance.get(`nameservice/names/${name}/whois`);
  data = res.data;
  return data;
}

export async function resolveName(name: string): Promise<String> {
  let data: String
  const res = await instance.get(`nameservice/names/${name}`);
  data = res.data;
  return data;
}
