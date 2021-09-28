import React from 'react';
import Data from "../../Data/Search_data";
import "../../style/NavBar/Search_Result_Desk.css"
function SearchResultDesk(prop) {
    const outPutSearch = [];
    const outPutData = [];

    function searchInObject(){
        for(let i=0;i<Data.length;i++){
            for(let j=0;j<Data[i].vall.length;j++){
                if(Data[i].vall[j].value.includes(prop.prop.trim().toLowerCase())) {
                    outPutSearch.push(Data[i].vall[j].realValue);
                    outPutData.push(Data[i].vall[j].realData);
                }
            }
        }
    }
    // calling fxn after rendering all time
    searchInObject();
    if(outPutSearch.length === 0){
        outPutSearch.push("Result Not Found");
    }
    return (
        <div className="search_result_box_desk">
            {
                outPutSearch.map((res,index)=><a id="search_result_items" key={index}>{res}</a>)
            }
        </div>
    );
}

export default SearchResultDesk;