import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { Breed } from '../../../models/breed.model';
import { BreedService } from '../../../services/breed.service';

@Component({
    selector: 'chatons-breed-list',
    templateUrl: './breed-list.component.html',
    styleUrls: ['./breed-list.component.scss'],
})
export class BreedListComponent implements OnInit {
    displayedColumns: string[] = ['name'];
    dataSource: MatTableDataSource<Breed>;

    constructor(private breedService: BreedService) {}

    ngOnInit() {
        this.breedService.search().subscribe(values => {
            this.dataSource = new MatTableDataSource<Breed>(values.rows);
        });
    }
}
