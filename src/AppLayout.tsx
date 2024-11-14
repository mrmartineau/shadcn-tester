import { AppSidebar } from '@/components/app-sidebar'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { CommandDialogDemo } from './components/command-dialog'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'

type AppLayoutProps = {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 p-4">
            <div className="flex items-center justify-between gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex items-center justify-center flex-grow gap-2">
                <CommandDialogDemo />
              </div>
              <ModeToggle />
            </div>
          </header>
          <main>{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
