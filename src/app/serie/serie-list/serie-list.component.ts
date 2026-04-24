import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  average: number = 0;
  selectedSerie!: Serie;
  constructor(private serieService: SerieService, private cdr : ChangeDetectorRef) {}

   ngOnInit(): void {
    this.getSeries();
  }

  getSeries():void{
    this.serieService.getSeries().subscribe(data => {
      console.log(data);
      this.series = data;
      this.calculateAverage(this.series);
      this.cdr.detectChanges();
    });
  }

  calculateAverage(series: Array<Serie>): void {
    if(series.length >0) {
      const totalSeasons = series.reduce((total, s) => total + s.seasons, 0);
      this.average = totalSeasons / series.length; 
    }
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }

}
