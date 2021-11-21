import Repos from "../types/repos";
import apiClient from "./apiClient";

const reposService = {
    getRepos: async (): Promise<Repos[]> => {
        const { data } = await apiClient.get('repos')
        return data
    },
    postRepos: async (body: Repos): Promise<Repos> => {
        console.log(apiClient)
        const { data } = await apiClient.post('repos', body)
        return data
    }
}

export default reposService