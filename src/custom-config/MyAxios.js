
import axios from "axios";

export default axios.create({
    baseURL:"http://192.168.1.100:7070"
    // ,
    // headers:{
    //     "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXJhZyIsImlhdCI6MTY4MDA4ODEwNCwiZXhwIjoxNjgwMDkxNzA0fQ.viVYie1gXKEJTkeCRw33pN--1hMhM-8Cfb8FWr-Ay94"
    // }
})