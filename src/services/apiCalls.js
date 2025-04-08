import axios from "axios";

export const getUsers = async () =>
{
    const API_URL = "https://reqres.in/api/users";

    const {data} = await axios(API_URL);

    return data.data
}


export const getUsersById = async ({params}) =>
    {
        const API_URL = "https://reqres.in/api/users/"+params.id;
    
        const {data} = await axios(API_URL);
    
        return data.data
    }