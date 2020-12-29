import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Container
} from 'reactstrap';
import InputField from '../Common/InputField'
import Buttons from '../Common/Buttons'
class NewCampaign extends Component {
    render() {
          const { toastStatus, editStatus, selected, owner, campaignType } = this.props
            if(this.props.toastStatus){
                setTimeout(this.props.changeToastStatus,2000)
            }  

        const toast = !toastStatus? "": <div className="toastNotification">Success</div>

        if(editStatus && (selected!==undefined || selected!=="")){
            const { createdTime} = selected
        return(
        <Container>
                <div className="App">
                    <p>Update campaign</p>
                </div>
                {toast}
                <InputField Title= "Owner Name" Value={owner} onChange={e=>this.props.ownerChanged(e)} />
                <InputField Title= "Type" Value={campaignType} onChange={e=>this.props.typeChanged(e)} />

                <Buttons 
                    Disabled={owner==="" || campaignType===""} 
                    OnClick={()=>this.props.updateCampaign(owner,campaignType, createdTime)}LinkTo="/"
                    OnReset={()=>this.props.reset()}>
                        Update
                </Buttons>
            </Container>
        )
        } else 
        return (
            <Container>
                <div className="App">
                    <p>Add new campaign</p>
                </div>
                {toast}
                <InputField Title= "Owner Name" Value={owner} onChange={e=>this.props.ownerChanged(e)} />
                <InputField Title= "Type" Value={campaignType} onChange={e=>this.props.typeChanged(e)} />
                <Buttons 
                    Disabled={owner==="" || campaignType===""} 
                    OnClick={()=>this.props.createCampaign(owner,campaignType)}
                    LinkTo="/"
                    OnReset={()=>this.props.reset()}>
                        Create
                </Buttons>
            </Container>
        )
    }
}

function mapState(state) {
    return {
        ...state,
    };
}

function mapDispatch(dispatch) {
    return ({
        ownerChanged(e){
            dispatch({ type: "OWNER_CHANGED", owner: e.target.value })
        },
        typeChanged(e){
            dispatch({ type: "TYPE_CHANGED", campaignType: e.target.value })
        },
        createCampaign(owner,type){
            var currentdate = new Date(); 
            var datetime = currentdate.getDate() + "-"
                    + (currentdate.getMonth()+1)  + "-" 
                    + currentdate.getFullYear() + " "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    
            let NewCampaign = {
                owner: owner,
                type: type,
                createdTime: datetime,
                lastmodifiedTime: datetime
            }
            
            dispatch({ type: "ADD_CAMPAIGN", newCampaign: NewCampaign })
            //  this.props.history.push("/campaignslist")
        },
        updateCampaign(owner,campaignType, createdTime){
            var currentdate = new Date(); 
            var datetime = currentdate.getDate() + "-"
                    + (currentdate.getMonth()+1)  + "-" 
                    + currentdate.getFullYear() + " "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    
            let UpdateDetails = {
                owner: owner,
                type: campaignType,
                createdTime: createdTime,
                lastmodifiedTime: datetime
            }
            dispatch({ type: "EDIT_FINISHED", editedCampaign: UpdateDetails })
        },
        changeToastStatus(){
            dispatch({ type: "TOAST_STATUS" })
        },
        reset(){
            dispatch({ type: "RESET" })
        }


    })
}
export default connect(mapState,mapDispatch)(NewCampaign)