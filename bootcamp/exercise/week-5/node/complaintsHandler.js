


function handleComplaint(complaint) 
{
    Object.keys(complaint).forEach(key => {

        if(key === "type")
        {
            let log
            switch (complaint.type) {
                case "finance":
                    log = "Money doesn’t grow on trees, you know."
                    break
                case "weather":
                    log = "It is the way of nature. Not much to be done."
                    break
                case "emotions":
                    log = "It’ll pass, as all things do, with time."
            }
            console.log(log)

        }
        
    })
}
module.exports = {handleComplaint}
