import axios from"axios"

 const handleGetUsers = async () => {
    try {
         const data:object[] = await (await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")).data
        // setUsers(data)
        return data  
    } catch (error) {
        console.log(error)
    }
}

export const allUsers = handleGetUsers() 