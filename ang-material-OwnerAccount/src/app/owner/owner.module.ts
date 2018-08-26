import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerRoutingModule } from './owner-routing/owner-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MaterialModule
  ],
  declarations: [OwnerListComponent]
})
export class OwnerModule { }
