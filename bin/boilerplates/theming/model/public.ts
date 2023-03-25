import { createDomain } from 'effector'
import { createDefaultTheme } from '../themes/main'
import { ThemeItem } from './types'

export const publicTheming = createDomain()

export const changeTheme = publicTheming.event<string>()
export const toggleTheme = publicTheming.event<void>()
export const registerTheme = publicTheming.event<ThemeItem>()
export const resetThemingState = publicTheming.event<void>()
export const resetTheme = publicTheming.event<void>()

export const $currentTheme = publicTheming.store<ThemeItem>(createDefaultTheme())
