import { ThemeItem } from '../model/types'


export const createDefaultTheme = (): ThemeItem => ({
  name: 'main',
  variables: mainTheme,
})


export const mainTheme = {
  mainBackground: '#fff',

}
