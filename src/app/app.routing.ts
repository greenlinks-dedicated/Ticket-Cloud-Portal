import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'Dashboard',//  Dashboard
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { //    DASHBOARD MODULE
                path: '',
                loadChildren: './+dashboard/dashboard.module#DashBoardModule'
            },
            { //    PROFILE MODULE
                path: 'profile',
                loadChildren: './+profile/profile.module#ProfileModule'
            },
            { //    EVENT MODULE
                path: 'events',
                loadChildren: './+events/events.module#EventModule'
            },
            { //    TICKET MODULE 
                path: 'tickets',
                loadChildren: './+tickets/tickets.module#TicketModule'
            },
            { //    GUEST LIST MODULE 
                path: 'guestlist',
                loadChildren: './+guest-list/guest_list.module#GuestListModule'
            },
            { //    ATTANDEES MODULE 
                path: 'attandees',
                loadChildren: './+attandees/attandees.module#AttandeesModule'
            },
            { //    STAFF MODULE 
                path: 'staff',
                loadChildren: './+staff/staff.module#StaffModule'
            },
            { //   REPORTS MODULE 
                path: 'reports',
                loadChildren: './+reports/reports.module#ReportsModule'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            }
        ]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }]
    }
];
