import { reducerReduce } from '../specHelper'
import reducer from '../Reducer'

describe('State value changes with respect to actions',()=>{
	test('state values regarding create is changed',()=>{
        let item = {
            createdTime: "29-12-2020 21:0:24",
            lastmodifiedTime: "29-12-2020 21:0:24",
            owner: "Bickey",
            type: "SMS"
        }
		var state = reducerReduce(reducer,[{type:"ADD_CAMPAIGN",newCampaign:item}])
		expect(state.allCampaign.length).toBe(1)
		expect(state.owner).toBe("")
        expect(state.campaignType).toBe("")
        expect(state.toastStatus).toBe(true)
    })
	test('state values regarding toast notification change',()=>{
		var state = reducerReduce(reducer,[{type:"TOAST_STATUS"}])
		expect(state.toastStatus).toBe(false)
    })
    test('state values regarding owner change',()=>{
		var state = reducerReduce(reducer,[{type:"OWNER_CHANGED", owner:"Tester"}])
		expect(state.owner).toBe("Tester")
    })
    test('state values regarding campaign type change',()=>{
		var state = reducerReduce(reducer,[{type:"TYPE_CHANGED", campaignType:"Email Notification"}])
		expect(state.campaignType).toBe("Email Notification")
  })
})