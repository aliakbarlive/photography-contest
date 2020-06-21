import axios from 'axios'
export const fetchUserAction=()=>{
    return(dispatch)=>{
        // fetch("/api/current_user")
        // .then(res=>{res.json()})
        // .then((data)=>{})

        axios.get('/api/current_user')
        .then((res)=>{
            dispatch({type:'GET_USER', payload:res.data})
        })
    }
}