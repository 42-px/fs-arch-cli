import { createDomain } from 'effector'
import { createDefaultTheme } from '../themes/main'
import { ThemeItem } from './types'


const privateTheming = createDomain()

export const $availableThemes = privateTheming.store<ThemeItem[]>([
    createDefaultTheme(),
])
