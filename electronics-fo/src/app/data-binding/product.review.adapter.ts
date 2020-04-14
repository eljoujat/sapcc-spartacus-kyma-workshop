import {Injectable, InjectionToken} from '@angular/core';
import {
  OccCartEntryAdapter, OccProductReviewsAdapter,
} from '@spartacus/core';
import {HttpHeaders} from "@angular/common/http";
import {pluck} from "rxjs/operators";

export const PRODUCT_REVIEW_NORMALIZER = new InjectionToken('ProductReviewNormalizer');

@Injectable({
  providedIn: 'root',
})

export class DummyProductReviewtAdapter extends OccProductReviewsAdapter {



  load(productCode, maxCount) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZkMmEwYjg5ZTBmMzlhZmZiNDBiNjlhMzFiMWE3N2M5ZWQ0ZjFhYjMifQ.eyJpc3MiOiJodHRwczovL2RleC5reW1hLmxvY2FsIiwic3ViIjoiQ2lBM2NHdHFZbVJ3TjJvMmMzbDFOR3d4ZHpGeWJEVnViWEZ3WmpremRESTBkQklGYkc5allXdyIsImF1ZCI6WyJreW1hLWNsaWVudCIsImNvbnNvbGUiXSwiZXhwIjoxNTg2MzYzOTI1LCJpYXQiOjE1ODYzMzUxMjUsImF6cCI6ImNvbnNvbGUiLCJub25jZSI6IjkwZjNlNjYwYzY1ZjQzZmU4ZTM0MjMyMjk5OWY2MmFmIiwiYXRfaGFzaCI6IlFyU2U2RmFfanZ3NDJicG15MFhBM2ciLCJlbWFpbCI6ImFkbWluQGt5bWEuY3giLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6ImFkbWluIn0.P8l5DTlBx5dWwGCAp63MCdlU7O8SbkSNksFAPMZzZrG449zMtvvaCejlfGDomUy-Eedcxwg2QAK5pryhsV_LzG_XGdjzpdJN-EnIBac_9lTtLUs2K1N7XpCi4scsWpoCVhiDVLEvlDLrTkXDE2TLik4gNmssO34JT0j8uQg-pPi_DwLinkYw6p3tvyJeQY5ZUB2rfp-9-viG58AJqLijMseL48Omh1D6OJBRC2FbE0kNjdvxHLEmUZ4R4FraRQq7YWxNvDBOonjipQ1v_XemnHAdnQP3h001lrCjec1-quFQQAu2cD6Mfrsl6lQmlHSA6baEFDlbmkR8zOJYcdgZug'
    });

   return this.http.get("https://custom-review-default.kyma.local/",{ headers: headers }).pipe(pluck('reviews'),this.converter.pipeableMany(PRODUCT_REVIEW_NORMALIZER));

   //return super.load(productCode,maxCount);
  }

}
