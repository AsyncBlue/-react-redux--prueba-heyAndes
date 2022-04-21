import { Routes, Route, BrowserRouter, Navigate  } from 'react-router-dom'
import { AgencyScreen } from '../components/AgencyScreen'
import { HomeScreen } from '../components/HomeScreen'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/empresas" element={ <HomeScreen /> } />
                <Route path="/:nombre_empresa" element={ <AgencyScreen /> } />
                <Route path="*" element={ <Navigate to="/empresas" replace /> } />
            </Routes>
        </BrowserRouter>
    )
}