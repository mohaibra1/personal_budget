//varaible to store information about your envelopes and total budget
const envelopes = [{Envelope : "Electricity", total: 2}, {Envelope: 'Food', total: 3}]


//get all envelope data
const getAllEnvelopes = () => {
    return envelopes;
}

//add new envelope to the database
const addNewenvelope = (newEnvelope) => {
    const isValid = validation(newEnvelope)
    if(isValid){
        envelopes.push(newEnvelope)
    }
    return newEnvelope
}


//validate new object
const validation = (newEnvelope) => {
    for(let env in newEnvelope){
        if(!env){
            console.log(env)
            throw new Error('One of the keys is empty!')
        }
    }
    return true;
}

module.exports = {
    getAllEnvelopes,
    addNewenvelope,
}