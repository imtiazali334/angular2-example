import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes} from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DashbordSideComponent } from './dashbord-side/dashbord-side.component';
import { RequestLeaveComponent } from './request-leave/request-leave.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { UpdateLeaveComponent } from './update-leave/update-leave.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { ProfileComponent } from './profile/profile.component';

import { LeaveHistoryService} from './shared/leave-history.service';
import { ReqLeaveService } from './shared/req-leave.service';

export const routes:Routes=[
  // {path:'',component:LoginComponent},
  {path:'dashbord',component:DashbordComponent},
  {path:"requestLeave",component:RequestLeaveComponent},
  {path:"leaveHistory",component:LeaveHistoryComponent},
  {path:'updateLeave',component:UpdateLeaveComponent},
  {path:'holidayList',component:HolidayListComponent},
  {path:'profile',component:ProfileComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    DashbordSideComponent,
    RequestLeaveComponent,
    HolidayListComponent,
    LeaveHistoryComponent,
    UpdateLeaveComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [LeaveHistoryService,ReqLeaveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
