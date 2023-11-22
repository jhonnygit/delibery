import {ApiContants} from '../contants';
import axios from 'axios';
import { authHeader } from '../utils/Generator';
import { getToken } from '../Store';

const getUserData=async()=>{
    console.log('UserService | getuserData'); 
    try{
        let userResponse=await axios.get(
            `${ApiContants.BACKEND_API.BASE_API_UL}${ApiContants.BACKEND_API.USER}/get-user`,
            {
                headers:authHeader(getToken())
            },
        );
        if(userResponse?.status===200){
            return {
                status:true,
                message:'user data fetched',
                data:userResponse?.data,
            };
        }else{
            return {
                status:false,
                message:'user data not found',                
            };
        }        
    }catch(error){
        console.log(error?.response?.data);
        return {
            status:false,
            message: error?.response?.data?.message
             ? error?.response?.data?.message
             :`User data not found`,                
        };
    }
};

export default {getUserData};
