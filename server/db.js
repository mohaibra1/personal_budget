//varaible to store information about your envelopes and total budget
//increase 1 by id when new envelope
let id = 1
const envelopes = [{id: id, envelope : "Electricity", total: 250}, {id: id +1, envelope: 'Food', total: 350}]


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

//update a specific envelope
const updateEnvelope = (editEnvelope) => {
    const envelopeToUpdate = findEnvelopById(editEnvelope.id);
    if(envelopeToUpdate){
        envelopeToUpdate.envelope = editEnvelope.envelope
        envelopeToUpdate.total = editEnvelope.total
        return envelopeToUpdate
    } else{
        throw new Error('Nothing found')
    }
}

//delete a specific envelope
const deleteEnvelope = (deleteEnvelopeId) => {
    let isDeleted = false
    for(let env in envelopes){
        if(envelopes[env].id == deleteEnvelopeId){
            envelopes.splice(env, 1)
            isDeleted = true
        }
    }
    return isDeleted
}

//transfer envelope from one to another
const transferEnvelope = (from, to) => {
  let envelopeFrom = findEnvelopByName(from)
  let envelopeTo = findEnvelopByName(to)

   envelopeFrom.total += envelopeTo.total

   return envelopeFrom
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

const findEnvelopByName = (name) => {
    for(let env in envelopes){
        if(envelopes[env].envelope == name){
            return envelopes[env]
        }
    }
}

module.exports = {
    getAllEnvelopes,
    addNewenvelope,
    getEnvelopeById,
    updateEnvelope,
    deleteEnvelope,
    transferEnvelope
}