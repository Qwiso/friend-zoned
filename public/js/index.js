import { GoogleMap } from './GoogleMap'

const foo = new GoogleMap()

window.addEventListener('map_loaded', function(e){
    console.log(e)
}, false)

window.addEventListener('map_overlay_drawn', function(e){
    console.log(e)
}, false)

window.addEventListener('map_overlay_clicked', function(e){
    console.log(e)
}, false)

window.addEventListener('map_user_save', function(e){
    console.log(e)
}, false)

window.addEventListener('map_user_load', function(e){
    console.log(e)
}, false)