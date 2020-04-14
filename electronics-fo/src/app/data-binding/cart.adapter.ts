import { Injectable } from '@angular/core';

import {
   OccCartEntryAdapter,
} from '@spartacus/core';
@Injectable({
  providedIn: 'root',
})
export class DummyCarttAdapter extends OccCartEntryAdapter {



  add(userId, cartId, productCode, quantity = 1) {

    console.log("Salam adapter ...");
    return super.add(userId, cartId, productCode, quantity);

  }

}
