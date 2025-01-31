import { useState } from "react";



export function formHook(dataForm){
    const [data,setData] = useState(dataForm)

    const updateData = (name, value) => {
        setData(prevData => ({
            ...prevData, 
            [name]: value,
        }));
    };


    const clearData = ()=>{
        setData(dataForm);
    }

    return {
        data,updateData,clearData
    }
}