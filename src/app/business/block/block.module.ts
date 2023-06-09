import { NgModule, APP_INITIALIZER } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { BucketsModule } from './buckets.module';
import { CloudBlockServiceModule } from './cloud-block-service/cloud-block-service.module';
import { CloudFileShareModule } from './cloud-file-share/cloudFileShare.module';
import { BlockComponent } from './block.component';

let routers = [{
  path: '',
  component: BlockComponent
}]

@NgModule({
  declarations: [
    BlockComponent
  ],
  imports: [
    RouterModule.forChild(routers),
    SharedModule,
    BucketsModule,
    CloudBlockServiceModule,
    CloudFileShareModule,
  ],
  providers: []
})
export class BlockModule { }
