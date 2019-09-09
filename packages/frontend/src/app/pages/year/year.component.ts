import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';

export interface Point2D {
  x: number;
  y: number;
}

@Component({
  selector: 'app-years',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.sass']
})
export class YearComponent implements OnInit {

  @ViewChild('canvas', {static: true})
  public canvas: ElementRef<HTMLCanvasElement>;

  private ctx: CanvasRenderingContext2D;

  private RECT_SIZE = 40;
  private PADDING = 0;

  @Input()
  public width = 900;

  @Input()
  public height = 500;

  public year: number;

  public hoverPoint: Point2D = {
    x: 0, y: 0
  };

  private yearOffset = 0;

  constructor() {
  }

  /**
   * Инициализация компонента
   */
  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.year = moment().year();

    requestAnimationFrame(() => this.draw());
  }

  private draw() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.width, this.height);

    const offsetX = 30;
    const offsetY = 30;

    for (let y = 1; y < 10; y++) {
      let year = this.year - 50;
      let firstDecadeYear = year - (year % 10) + (this.yearOffset);
      let currentYear = firstDecadeYear + y * 10;
      this.ctx.font = '20px Arial';

      let isCurrentDecade = firstDecadeYear + y * 10 === this.year - (this.year % 10);

      let yy = y * this.RECT_SIZE + offsetY;
      if (isCurrentDecade) {
        this.ctx.fillStyle = 'red';
        this.ctx.fillText(currentYear.toString(), 0, yy);
      } else {
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(currentYear.toString(), 0, yy);
      }
    }

    for (let x = 1; x <= 9; x++) {
      for (let y = 1; y <= 9; y++) {
        this.ctx.fillStyle = 'white';
        this.ctx.strokeStyle = 'white';
        let xx = offsetX + x * this.RECT_SIZE + this.PADDING;
        let yy = y * this.RECT_SIZE + this.PADDING;
        let year = this.year - 50;
        let firstDecadeYear = year - (year % 10) + (this.yearOffset);
        let isCurrentYear = firstDecadeYear + x === this.year;
        let hovered = this.hoverPoint.x > xx && this.hoverPoint.x < xx + this.RECT_SIZE
          && this.hoverPoint.y > yy && this.hoverPoint.y < yy + this.RECT_SIZE;

        if (hovered || isCurrentYear) {
          this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
          this.ctx.fillRect(offsetX + x * this.RECT_SIZE + this.PADDING,
            y * this.RECT_SIZE + this.PADDING,
            this.RECT_SIZE,
            this.RECT_SIZE);
        } else {
          this.ctx.strokeStyle = 'black';
          this.ctx.strokeRect(offsetX + x * this.RECT_SIZE + this.PADDING,
            y * this.RECT_SIZE + this.PADDING,
            this.RECT_SIZE, this.RECT_SIZE);
        }
      }
    }

    requestAnimationFrame(() => this.draw());
  }

  public mousemove(event: MouseEvent) {
    this.hoverPoint.x = event.offsetX;
    this.hoverPoint.y = event.offsetY;
  }

  @HostListener('scroll')
  public onScroll($event) {
    debugger;
  }
}
