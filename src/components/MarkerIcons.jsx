import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export function getMarkerIconByName(iconName) {
    if (typeof iconName === "string") {
        let icon = findIconDefinition({ prefix: 'fas', iconName: iconName }).icon

        return {
            anchor: { x: icon[0]/2, y: icon[1] },
            path: icon[4],
            scale: 0.075,
            strokeColor: '#000',
            strokeWeight: 1,
            fillColor: '#fff',
            fillOpacity: 0.66
        }
    } else {
        let icons = []
        iconName.forEach(iconName => {
            let icon = findIconDefinition({ prefix: 'fas', iconName: iconName }).icon
            icons.push({
                anchor: { x: icon[0]/2, y: icon[1] },
                path: icon[4],
                scale: 0.075,
                strokeColor: '#000',
                strokeWeight: 1,
                fillColor: '#fff',
                fillOpacity: 0.66
            })
        })
        return icons
    }
}