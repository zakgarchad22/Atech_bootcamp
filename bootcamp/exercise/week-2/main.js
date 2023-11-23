let _memories = ["that time at band camp", "yesterday's breakfast"]
    
const Brain = function(){
    const dayDream = () => this._memories
    const experience = memory => _memories.push(memory)
    const forget = memory => _memories.splice(_memories.indexOf(memory), 1)
    const spazz = () => console.log("bleurg")

    return{
        reminisce: dayDream,
        live: experience,
        blank: forget,
        freakOut: spazz
    }
}

const brain = Brain()
brain.reminisce()
