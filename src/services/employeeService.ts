import axios, { AxiosResponse } from "axios";
import { User } from "../model/user";

const url: string = 'http://localhost:3000/user'

export const _getAllUser = (): Promise<AxiosResponse> => {
    return axios.get(url)
}

export const _createUser = (user: User): Promise<AxiosResponse> => {
    return axios.post(url, user)
}

export const _deleteUser = (id: string): Promise<AxiosResponse> => {
    return axios.delete(url + '/' + id)
}

export const _updateUser = (user: User): Promise<AxiosResponse> => {
    return axios.put(url + '/' + user.id, user)
}
