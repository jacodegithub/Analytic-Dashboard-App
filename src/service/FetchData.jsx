import { RestAxios } from "./Helper"

export const getDataCsv = () => {
    return RestAxios.get('home')
    .then(response => response.data)
}