'use client'

import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import Link from 'next/link'
import { MdDragHandle } from 'react-icons/md'

export function NavDocuments({
  items
}) {
  return (
    <SidebarGroup className='group-data-[collapsible=icon]:hidden'>
      <SidebarGroupLabel>Reports</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <Link href='/dashboard/reports'>
          <SidebarMenuItem>
            <SidebarMenuButton className='text-sidebar-foreground/70'>
              <MdDragHandle className='text-sidebar-foreground/70' />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </Link>
      </SidebarMenu>
    </SidebarGroup>
  )
}
