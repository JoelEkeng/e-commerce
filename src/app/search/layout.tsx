import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/(Search)/app-sidebar"
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="ml-24">
        {children}
      </main>
    </SidebarProvider>
  )
}