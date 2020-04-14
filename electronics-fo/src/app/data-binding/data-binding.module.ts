import { NgModule } from '@angular/core';
import {ProductReviewsAdapter} from "@spartacus/core";
import {DummyProductReviewtAdapter} from "./product.review.adapter";

@NgModule({
  providers: [
    {
      provide: ProductReviewsAdapter,
      useExisting: DummyProductReviewtAdapter,
    }
  ],
})
export class BootcampDataBindingModule {}
