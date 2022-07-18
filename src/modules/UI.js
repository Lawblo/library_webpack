import Library from './library'

const UI = (() => {
    function main () {
        const body = document.querySelector('body')
        body.appendChild(Library.main())
        
    }
    return {main}
})()

export default UI