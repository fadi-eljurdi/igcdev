import utilities from "../../utilities.js"
export default {
    template: await utilities.getPage('./js/components/services-section/services-section.html'),
    // props:['title'],
    data(){
        return{
            utilities
        }
    }
    
}