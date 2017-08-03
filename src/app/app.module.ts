import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Angular Material
import { MaterialModule,
         MdIconModule,
         MdIconRegistry,
         MdDatepickerModule,
         MdNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // md-tab
import 'hammerjs';

// Firebase
import { AngularFireModule         } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule     } from 'angularfire2/auth';
import { environment               } from '../environments/environment';

import { AppComponent } from './app.component';


////////////////////////////////////////////////////////////////////////////////////////////////////
// MyServices
import { MyUtilitiesService         } from './my-utilities.service';

// dialog
import { AlertDialogComponent   } from './alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

import { HomeComponent } from './home/home.component';

// MyDataTable
import { MyDataTableComponent  } from './my-data-table/my-data-table.component';
import { ItemsPerPageComponent } from './my-data-table/items-per-page/items-per-page.component';
import { PagenationComponent   } from './my-data-table/pagenation/pagenation.component';
import { ResetButtonComponent  } from './my-data-table/reset-button/reset-button.component';

import { MyWaitingSpinnerComponent } from './my-waiting-spinner/my-waiting-spinner.component';
import { AppListComponent          } from './app-list/app-list.component';

import { UserAdminComponent } from './user-admin/user-admin.component';
import { LoginComponent     } from './user-admin/login/login.component';
import { SignUpComponent    } from './user-admin/sign-up/sign-up.component';

import { GameGroupsService } from './quantum-werewolf/game-groups.service';

import { GroupListComponent } from './quantum-werewolf/group-list/group-list.component';
import { GameMainComponent } from './quantum-werewolf/game-main/game-main.component';
import { AddGroupDialogComponent } from './quantum-werewolf/add-group-dialog/add-group-dialog.component';
import { ProbabilityTableComponent } from './quantum-werewolf/game-main/probability-table/probability-table.component';
import { GameRulesComponent } from './quantum-werewolf/game-main/game-rules/game-rules.component';





@NgModule({
  declarations: [
    AppComponent,
    AlertDialogComponent,
    ConfirmDialogComponent,
    HomeComponent,
    MyDataTableComponent,
    ItemsPerPageComponent,
    PagenationComponent,
    ResetButtonComponent,
    MyWaitingSpinnerComponent,
    AppListComponent,
    UserAdminComponent,
    LoginComponent,
    SignUpComponent,
    GroupListComponent,
    GameMainComponent,
    AddGroupDialogComponent,
    ProbabilityTableComponent,
    GameRulesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot( [
      { path: ''                               , component: HomeComponent      },
      { path: 'user_admin'                     , component: UserAdminComponent },
      { path: 'quantum-werewolf'               , component: GroupListComponent },
      { path: 'quantum-werewolf-game-main/:id' , component: GameMainComponent  },
    ], { useHash: true } ),
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase, 'QuantumWerewolfApp'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [
    MyUtilitiesService,
    GameGroupsService,
  ],
  /* for dialog, snackbar */
  entryComponents: [
      AlertDialogComponent,
      ConfirmDialogComponent,
      AddGroupDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
