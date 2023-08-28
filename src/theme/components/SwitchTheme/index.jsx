import { useAppDispatch, useAppSelector } from "@dispatch/index"
import { toggleTheme } from "@dispatch/reducers/themeReducer"
import { SwitchThemeCustom } from "./element"

const SwitchTheme = () => {
  const theme = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const handleThemeChange = () => {
    dispatch(toggleTheme())
  }
  return <SwitchThemeCustom checked={theme === 'dark' ? true : false} onChange={handleThemeChange} />
}

export default SwitchTheme
