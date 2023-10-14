//varaible to store information about your envelopes and total budget
//increase 1 by id when new envelope
let id = 1
const envelopes = [{id: id, envelope : "Electricity", total: 2}, {id: id +1, envelope: 'Food', total: 3}]


//retrieve all enevelopes
const getAllEnvelopes = () => {
    return envelopes;
}

//retrieve specific enevelope
const getEnvelopeById = (specificId) => {
    return findEnvelopById(specificId)
}

//add new envelope to the database
const addNewenvelope = (newEnvelope) => {
    const isValid = validation(newEnvelope)
    if(isValid){
        newEnvelope.id = id + 2;
        envelopes.push(newEnvelope)
    }
    id++
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

const findEnvelopById = (specificId) => {
    for (let env in envelopes){
        if (envelopes[env].id == specificId){   
            return envelopes[env]
        }
    }
}

module.exports = {
    getAllEnvelopes,
    addNewenvelope,
    getEnvelopeById
}