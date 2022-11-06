import { lazy } from "react";


// ленивая загрузка страниц(сам компонент должен экспортироваться по дефолту)
export const MainPageAsync = lazy(()=>import('./MainPage'))