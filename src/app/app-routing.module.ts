import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = []
  
//     path: 'admin',
//     loadChildren: () =>
//       import(`./admin/admin.module`).then((mod) => mod.AdminModule),
//   },
//   { path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})  
export class AppRoutingModule {}
