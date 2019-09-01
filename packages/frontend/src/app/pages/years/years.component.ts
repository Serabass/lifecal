import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';

export interface Point2D {
  x: number;
  y: number;
}

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.sass']
})
export class YearsComponent implements OnInit {

  @ViewChild('canvas', {static: true})
  public canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  @Input()
  public width = 900;

  @Input()
  public height = 500;

  public year: number;

  public hoverPoint: Point2D = {
    x: 0, y: 0
  };

  private yearOffset = 0;

  constructor() { }

  ngOnInit() {
    this.ctx =  this.canvas.nativeElement.getContext('2d');
    this.year = moment().year();

    requestAnimationFrame(() => this.draw());
  }

  private draw() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.width, this.height);

    let year = this.year - 5 + this.yearOffset;

    const offsetX = 70;
    for (let x = 1; x <= 9; x++) {
      for (let y = 1; y <= 9; y++) {
        this.ctx.strokeStyle = 'black';

        this.ctx.strokeRect(offsetX + x * 50, y * 50, 40, 40);
      }
    }

    for (let y = 1; y <= 10; y++) {
      let currentYear = (year + y);
      this.ctx.fillStyle = 'black';
      this.ctx.strokeStyle = 'black';
      this.ctx.font = '30px Arial';

      let yy = y * 50 + 30;
      if (currentYear === this.year) {
        this.ctx.fillText(currentYear.toString(), 0, yy );
      } else {
        this.ctx.strokeText(currentYear.toString(), 0, yy );
      }
    }
  }

  public mousemove(event: MouseEvent) {
    this.hoverPoint.x = event.offsetX;
    this.hoverPoint.y = event.offsetY;
  }
}
