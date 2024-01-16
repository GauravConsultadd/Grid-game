import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges {
  rows:number=6
  cols:number=6

  coloured_cell=0
  title = 'grid-game';
  numbers:number[]=[]

  constructor() {
    
    for(let i=0;i<this.rows;i++) {
      for(let j=0;j<this.cols;j++) {
        this.numbers.push((i*this.cols + j));
      }
    }
    console.log(this.numbers)
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  public getStyles() {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.cols},1fr)`,
      width:'60vw',
      height:'80vh'
    };
  }

  setCell(val: number) {
    this.coloured_cell = val
  }

  setRow(val:number) {
    this.rows=val
    this.numbers=[]
    for(let i=0;i<this.rows;i++) {
      for(let j=0;j<this.cols;j++) {
        this.numbers.push((i*this.cols + j));
      }
    }
  }

  setCol(val:number) {
    this.cols=val
    console.log(this.cols)
    this.numbers=[]
    for(let i=0;i<this.rows;i++) {
      for(let j=0;j<val;j++) {
        this.numbers.push((i*val + j));
      }
    }
  }



  // public getNormalStyles() {
  //   return {
  //     backgroundColor:'blue',
  //   }
  // }

  // public getColouredStyles() {
  //   return {
  //     backgroundColor:'black'
  //   }
  // }
}
