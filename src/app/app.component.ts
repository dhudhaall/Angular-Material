import { MediaMatcher } from '@angular/cdk/layout/media-matcher';
import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { SubmitBulkUploadPopupComponent } from './features/scan-ship/bulk-uploads/submit-bulk-upload-popup/submit-bulk-upload-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger={} as any;
  title = 'SellerChainAppSuit';

  // mobileQuery: MediaQueryList;
  // _mobileQueryListener: () => void;

  // constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  //   this.mobileQuery = media.matchMedia('(max-width: 600px)');
  //   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  //   this.mobileQuery.addListener(this._mobileQueryListener);
  // }

  // ngOnDestroy(): void {
  //   this.mobileQuery.removeListener(this._mobileQueryListener);
  // }

  constructor(private dialog: MatDialog) {

  }
  public isExpanded = false;
  isLoggedIn = true;
  modeSidebar = "side";

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

  ngAfterViewInit(){

  }
  onDragBtnClick() {
    console.log('hi')
    // const dialogRef = this.dialog.open(SubmitBulkUploadPopupComponent);
  }
}
