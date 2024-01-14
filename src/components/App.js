import React from "react";
import SearchInput from "./searchinput";
import axios from "axios";
import ImageList from "./imagelist";




class  App extends React.Component{
    constructor(props){
        super(props)
        this.state={images: []}
        this.onsearchsubmit=this.onsearchsubmit.bind(this)
    }
    async onsearchsubmit(entry){
        try {
            const response=await axios.get(`https://pixabay.com/api/?key=41815102-dc824218ee6a1cf17a74f010a&q=${entry}&image_type=photo`)
            console.log(response.data.hits)
            this.setState({images:response.data.hits})
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }


    render(){
        return(
            
            <div className="ui container" style={{margin:"50px"}}>
                <SearchInput onsearchsubmit={this.onsearchsubmit}></SearchInput>
                <ImageList images={this.state.images}></ImageList>
               
            </div>
        )

    }
}
export default App;


