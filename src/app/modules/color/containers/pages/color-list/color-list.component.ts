import { Component, OnInit }  from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Color }              from '../../../models/color.model';
import { ColorService }       from '../../../services/color.service';

@Component({
    selector: 'chatons-color-list',
    templateUrl: './color-list.component.html',
    styleUrls: ['./color-list.component.scss'],
})
export class ColorListComponent implements OnInit {

    displayedColumns: string[] = ['name', 'code'];
    dataSource: MatTableDataSource<Color>;

    constructor(private colorService: ColorService) {
    }

    ngOnInit() {
        this.colorService.search().subscribe(values => {
            this.dataSource = new MatTableDataSource<Color>(values.rows);
        });
    }

}
