import React from "react";
class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.state={entry:""};
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onsearchsubmit(this.state.entry);
    };
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <div className="ui icon input" style={{textAlign: "right"}}>
                            <input type="text" placeholder="search.." onChange={(event)=>this.setState({entry:event.target.value})}
                            value={this.state.entry}
                            />
                            <i className="search icon"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchInput;
