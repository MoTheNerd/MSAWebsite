import { get, put, post, del } from "../actions/AxiosClient";

export const GENERAL = {
    getPrayerTimes: () => { return get("/general") },
    setPrayerTimes: (payload) => { return post("/general", payload) },
}