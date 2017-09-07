import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'coinsack-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit, OnDestroy {
  private _suscription: Subscription;
  private _selectedItem: string;

  public itemSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router, private changeDetection: ChangeDetectorRef) {
  }

  ngOnInit() {
    this._suscription = this.router.events.filter(data => data instanceof RoutesRecognized).subscribe((data: RoutesRecognized) =>
      this.setSelectedItem(data.state.root.firstChild.data.selectedItem));
  }

  private setSelectedItem(selectedItem: string) {
    this._selectedItem = selectedItem;
    this.changeDetection.detectChanges();
  }

  ngOnDestroy() {
    this._suscription.unsubscribe();
  }

  public get selectedItem(): string {
    return this._selectedItem;
  }

  public set selectedItem(value: string) {
    this._selectedItem = value;
    this.itemSelected.emit(value);
  }

}

