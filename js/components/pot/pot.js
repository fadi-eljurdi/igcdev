import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/pot/pot.html'),
    props:['title','src'],
    
}