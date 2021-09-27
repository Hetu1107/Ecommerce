import React from 'react';
import Data from "../../Data/Search_data";
const output = [];
function SearchResultDesk(prop) {


    function search_item(){
        Data.forEach((res,index)=>{
            // res.vall.forEach((re,index)=>{
            //     if(re.value.includes(prop.prop)){
            //         output.push(re.value)
            //
            //     }
            // })
            output.push(res.vall)
        })

    }
    console.log(output);
    return (
        <div>
            {
                search_item()
            }
        </div>
    );
}

export default SearchResultDesk;