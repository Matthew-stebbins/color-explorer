import { PresentationComponent } from './components/presentation/presentation.component';
import { CustomComponent } from './components/custom/custom.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: 'demo', component: CustomComponent},
{path: 'presentation/:id', component : PresentationComponent},
{path: '', redirectTo: 'presentation/0', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
