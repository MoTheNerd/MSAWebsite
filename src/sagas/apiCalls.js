import { get, put, post, del } from "../actions/AxiosClient";

export const GENERAL = {
    getPrayerTimes: () => { return get("/general") },
    setPrayerTimes: (payload) => { return post("/general", payload) },
}

export const AUTH = {
    signIn: (userInfo) => { return post("/auth/login", userInfo) },
    signUp: (userInfo) => { return post("/auth/create", userInfo) },
    update: (userInfo) => { return post("/auth/update", userInfo) },
}