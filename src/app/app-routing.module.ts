import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'auth', loadChildren: './business/auth/auth.module#AuthModule'},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', loadChildren: './business/home/home.module#HomeModule'},
    {path: 'help', loadChildren: './business/help/help.module#HelpModule'},
    {path: 'block', loadChildren: './business/block/block.module#BlockModule'},
    {path: 'createCloudVolume', loadChildren: './business/block/cloud-block-service/create/cloud-volume-create.module#CloudVolumeCreateModule'},
    {path: 'profile', loadChildren: './business/profile/profile.module#ProfileModule'},
    {path: 'createProfile', loadChildren: './business/profile/createProfile/createProfile.module#CreateProfileModule'},
    {path: 'modifyProfile/:profileId', loadChildren: './business/profile/modifyProfile/modifyProfile.module#ModifyProfileModule'},
    {path: 'resource', loadChildren: './business/resource/resource.module#ResourceModule'},
    {path: 'identity', loadChildren: './business/identity/identity.module#IdentityModule'},
    {path: 'block/:fromRoute', loadChildren: './business/block/block.module#BlockModule'},
    {path: 'dataflow', loadChildren: './business/dataflow/dataflow.module#DataflowModule'},
    {path: 'bucketDetail/:bucketId', loadChildren: './business/block/bucket-detail/bucket-detail.module#BucketDetailModule'},
    {path: 'objectAcl/:bucketId/:key', loadChildren: './business/block/bucket-detail/object-acl/object-acl.module#ObjectAclModule'},
    {path: 'akSkManagement', loadChildren: './business/ak-sk/ak-sk.module#AkSkModule'},
    {path: 'createCloudFileShare', loadChildren: './business/block/cloud-file-share/create/cloud-file-share-create.module#CloudFileShareCreateModule'},
    {path: 'modifyCloudFileShare/:fileShareId', loadChildren: './business/block/cloud-file-share/modify/cloud-file-share-modify.module#CloudFileShareModifyModule'},
    {path: 'servicePlanManagement', loadChildren: './business/service-plan/service-plan.module#ServicePlanModule'},
    {path: '**', redirectTo: '/home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ ]
})
export class AppRoutingModule {}
