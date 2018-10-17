import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export function getMarkerSVGByName(iconName) {
    let icon = findIconDefinition({ prefix: 'fas', iconName: iconName }).icon

    return {
        anchor: { x: icon[0]/2, y: icon[1] },
        path: icon[4],
        scale: 0.075,
        strokeColor: '#000000',
        strokeWeight: 1,
        fillColor: '#ffffff',
        fillOpacity: 0.66
    }
}