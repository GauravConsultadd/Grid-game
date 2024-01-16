import { Component, EventEmitter, INJECTOR, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})

export class GridComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  @Input() coloured_cell!:number;
  @Output() coloured_cellChange=new EventEmitter<number>();

  @Input() cols!:number
  @Output() colsChange=new EventEmitter<number>();

  @Input() rows!:number
  @Output() rowsChange=new EventEmitter<number>();
  

  
  moveUp() {
    if((this.coloured_cell/this.cols) < 1) {
      alert('Invalid move')
    }
    else {
      this.coloured_cell-=this.cols
      this.coloured_cellChange.emit(this.coloured_cell);
      
    }
  }

  moveDown() {
    if(this.coloured_cell>=((this.rows-1)*this.cols)) {
      alert('Invalid move')
    }
    else {
      this.coloured_cell+=this.cols;
      this.coloured_cellChange.emit(this.coloured_cell);
    }
  }

  moveLeft() {
    if((this.coloured_cell%this.cols)==0) {
      alert('Invalid move')
    }
    else {
      this.coloured_cell--;
      this.coloured_cellChange.emit(this.coloured_cell);
    }
  }

  moveRight() {
    if((this.coloured_cell%this.cols)>=(this.cols-1)) {
      alert('Invalid move')
    }
    else {
      this.coloured_cell++;
      this.coloured_cellChange.emit(this.coloured_cell);
    }
  }

  setRow(value:any) {
    this.rows=value
    console.log(this.rows)
    this.rowsChange.emit(this.rows)
  }

  setCol(value:any) {
    this.cols=value
    console.log(this.cols)
    this.colsChange.emit(value)
  }

}
