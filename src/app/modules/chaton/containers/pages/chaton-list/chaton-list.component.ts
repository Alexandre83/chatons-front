import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { Chaton } from '../../../models/chaton.model';
import { ChatonService } from '../../../services/chaton.service';

@Component({
    selector: 'chatons-chaton-list',
    templateUrl: './chaton-list.component.html',
    styleUrls: ['./chaton-list.component.scss'],
})
export class ChatonListComponent implements OnInit {
    displayedColumns: string[] = ['color', 'breed', 'birthDate', 'img'];
    dataSource: MatTableDataSource<Chaton>;

    constructor(private chatonService: ChatonService, public domSanitizationService: DomSanitizer) {}

    ngOnInit() {
        this.chatonService
            .search({
                _j: ['color-l', 'breed-l'],
                _e: ['color', 'breed'],
            })
            .subscribe(values => {
                this.dataSource = new MatTableDataSource<Chaton>(values.rows);
            });
    }
}
