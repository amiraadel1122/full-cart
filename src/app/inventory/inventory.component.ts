import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    DatePipe,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
})
export class InventoryComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'select',
    'position',
    'Name',
    'Description',
    'Price',
    'Brand',
    'Quantity',
    'Actions',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatSort) sort: MatSort;
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  editRow() {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      width: '90%',
      panelClass: 'full-screen-modal',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteRow() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

export interface PeriodicElement {
  position: number;
  Name: string;
  Description: string;
  Price: number;
  Brand: string;
  Quantity: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    Name: 'Hydrogen',
    Description: 'This is some description',
    Price: 2424,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 2,
    Name: 'Helium',
    Description: 'This is some description',
    Price: 34532,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 3,
    Name: 'Lithium',
    Description: 'This is some description',
    Price: 343434,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 4,
    Name: 'Beryllium',
    Description: 'This is some description',
    Price: 3244,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 5,
    Name: 'Boron',
    Description: 'This is some description',
    Price: 343434,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 6,
    Name: 'Carbon',
    Description: 'This is some description',
    Price: 3434,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 7,
    Name: 'Nitrogen',
    Description: 'This is some description',
    Price: 343434,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 8,
    Name: 'Oxygen',
    Description: 'This is some description',
    Price: 34343,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 9,
    Name: 'Fluorine',
    Description: 'This is some description',
    Price: 34343,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 10,
    Name: 'Neon',
    Description: 'This is some description',
    Price: 343434,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 11,
    Name: 'Sodium',
    Description: 'This is some description',
    Price: 434343,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 12,
    Name: 'Magnesium',
    Description: 'This is some description',
    Price: 3423,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 13,
    Name: 'Aluminum',
    Description: 'This is some description',
    Price: 2342,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 14,
    Name: 'Silicon',
    Description: 'This is some description',
    Price: 324,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 15,
    Name: 'Phosphorus',
    Description: 'This is some description',
    Price: 54767,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 16,
    Name: 'Sulfur',
    Description: 'This is some description',
    Price: 547547,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 17,
    Name: 'Chlorine',
    Description: 'This is some description',
    Price: 67967,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 18,
    Name: 'Argon',
    Description: 'This is some description',
    Price: 5435,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 19,
    Name: 'Potassium',
    Description: 'This is some description',
    Price: 5656,
    Brand: 'Dumm',
    Quantity: 300,
  },
  {
    position: 20,
    Name: 'Calcium',
    Description: 'This is some description',
    Price: 3245,
    Brand: 'Dumm',
    Quantity: 300,
  },
];
