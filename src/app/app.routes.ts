import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'template-form',
        pathMatch: 'full'
    }
    ,
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'dataBinding',
        component: DataBindingComponent
    },
    {
        path: 'ng-class',
        component: NgClassComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'template-form',
        component: TemplateFormComponent
    }
];
