import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}