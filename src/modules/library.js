const library = (() => {
    function main () {
        console.log(123)
        const test = document.createElement('div')
        return test
    }
    return { main }
})()

export default library