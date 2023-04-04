import { Card } from "./Card"
import { useState, useEffect, useContext } from "react"
import { UserContext } from "../hooks/UserProvider";
import axiosInstance from "../../apis/axiosAuthApi";

export function DocumentCards() {

    const {cardList, setCardList} = useContext(UserContext);


    useEffect(()=>{
        axiosInstance.get('user/fetchcards').then(response=>{
            console.log(response.data.cards);
            setCardList(response.data.cards);
        }).catch(e=>{
            console.log(e);
        })
    }, [])

    return (
        <div className="document-cards">
            {cardList.map((cardObj) => 
                    <Card cardObj={cardObj} key={cardObj._id} />
            )}
        </div>
    )
}