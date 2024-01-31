import AdminRoute from '../../../components/AdminRoutes/AdminRoute'
import Dashboard from '../../../components/Pages/Dashboard/Dashboard'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminRoute>
      <Dashboard>
        {children}
      </Dashboard>
    </AdminRoute>
  )
}
