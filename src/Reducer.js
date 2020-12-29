export default (state = {
    allCampaign:[],
    owner:'',
    campaignType: '',
    editStatus: false,
    toastStatus:false,
    selected: {}
}, action) => {
    // console.log('Action',action.type, state)
	switch (action.type) {
        case "OWNER_CHANGED":
            return {
				...state,
                owner:action.owner
            }

        case "TYPE_CHANGED":
            return {
				...state,
                campaignType:action.campaignType
            }
		case "EDIT_START": 
            return {
                ...state,
                selected: action.selected,
                owner: action.selected.owner,
                campaignType: action.selected.type,
                editStatus: true
            }
        case "EDIT_FINISHED": 
        let updateItemId = action.editedCampaign.createdTime
        let updateItem = action.editedCampaign
        let updatedList = state.allCampaign
        updatedList.map(item=> {
            if(item.createdTime===updateItemId){
                item.owner=state.owner;
                item.type= state.campaignType;
                item.createdTime= updateItem.createdTime;
                item.lastmodifiedTime= updateItem.lastmodifiedTime;
                return updateItem
            }
        })
            return {
                ...state,
                selected: action.editedCampaign,
                allCampaign: updatedList,
                editStatus: false,
                owner: "",
                campaignType: "",
                toastStatus: true
            }
        case "TOAST_STATUS":
            return {
                ...state,
                toastStatus: false
            }
        case "ADD_CAMPAIGN": 
            return {
                ...state,
                allCampaign :[...state.allCampaign, action.newCampaign],
                owner: '',
                campaignType: '',
                toastStatus: true
            }
        case "RESET":
            return {
                ...state,
                owner:'',
                campaignType:''
            }
        default:
			return state
	}
}