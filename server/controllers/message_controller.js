let messages = []
let id= 0 //must increment after ever creation

module.exports = {
    create: ( req, res ) => {
        let { text, time } = req.body
        messages.push({id,text,time}) //why is it in curly braces?
        id++;
        res.status(200).send(messages)
    },

    read: ( req, res ) => {
        res.status(200).send (messages)
    },

    update: ( req, res ) => {
        let {text} = req.body
        let updateId = req.params.id; //data passed from the url 
        let messageIndex = messages.findIndex( message => message.id === +updateId) 
        let message = messages[messageIndex]

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        console.log(messageIndex)

        res.status(200).send(messages)
    },

    delete: ( req, res ) => {
       let deleteThis = req.params.id
       let messageIndex = messages.findIndex(message=>message.id === deleteThis) 
       messages.splice(messageIndex, 1)
       res.status(200).send(messages)       
    }
}
