import {Url} from "../../utils/constants";
import {UrlOptions} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import CatDraw from "./CatDraw";
import {Data} from "../../Story/CatAction/Action";
import{DataImg} from "../../Story/CatAction/Action";
const Index = () => {
const [search, setSearch] = useState('')
 const dataSelect = useSelector(state => state.isData)
    const dataImg = useSelector(state => state.isDataImg)
 const dispatch = useDispatch()

    console.log(dataImg)
 const gettingData = async () => {
     try {
      const resp = await fetch(UrlOptions)
         const result = await resp.json()
                 dispatch(Data(result))

         const response = await fetch(`${Url}${search}&api_key=live_laXqFwjfPEMYl1aZRQLmLtsoFk0voY4Gzl40qGI4LOCLQJ8UjKCcB9eRv478QLHY`)
const results = await response.json()
         dispatch(DataImg(results))

     }catch (e){
      console.log(e)
     }
 }
 useEffect(() => {

     gettingData()
 },[search])
    return (
        <>

            <CatDraw setSearch={setSearch}/>

        </>
    )
};
export default Index;