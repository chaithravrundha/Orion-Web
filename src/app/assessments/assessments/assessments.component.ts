import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild
} from "@angular/core";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { ResizeEvent } from 'angular-resizable-element';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: any[] = [
  {name: 'CAHPS Survey_Adult_Comm_Eng_HP50_2151a', Effective: '01/01/2011', Thru: '12/31/2025', hra:'HRA', Size: '2,13,4,1',Programs: 'care Coordination; Wellness; Diabetes;Mellitus'},
  {name: 'APA Severity of Posttraumatic Stress Symptoms - Adult', Effective: '01/01/2012', Thru: '12/31/2020', Size: '1,6,8,0', Programs: 'Arthritis (Osteoarthritis & Rheumatoid); Inpatient Case MngmtTotal; Joint ReplacementDiabetes Mellitus'},
  {name: 'Home Safety Checklist', Effective: '01/01/2016', Thru: '12/31/2013', Size: '5,20,59', Programs: 'Care Coordination; Disease Management; C-SNP - Chronic Heart Failure'},
  {name: 'IKDC Knee Evaluation Form', Effective: '01/01/2016', Thru: '12/31/2016', Size: '3,6,15,2', Programs: 'Disease Management; Care Coordination; Wellness; Chronic Obstructive Pulmonary Disease (COPD);'},
  {name: 'PHQ-2', Effective: '01/01/2016', Thru: '12/31/2013', Size: '4,20,72', Programs: 'Total Joint Replacement; Care Coordination; Arthritis (Osteoarthritis & Rheumatoid)'},
  {name: 'Patient Satisfaction Survey PSQ-18', Effective: '01/01/2018', Thru: '12/31/2018', Size: '11,11,50', Programs: 'Disease Management; Care Coordination; Arthritis (Osteoarthritis & Rheumatoid)'},
  {name: 'The Patient Health Questionnaire (PHQ-9)', Effective: '01/01/2016', Thru: '12/31/2020', hra:'HRA', Size: '1,5,10,0', Programs: 'Care Coordination; Disease Management; C-SNP - Chronic Heart Failure'},
  {name: 'PHQ-9', Effective: '01/01/2016', Thru: '12/31/2017', Size: '5,44,195', Programs: 'care Coordination; Wellness; Diabetes;Mellitus'},
  {name: 'PHQ-2', Effective: '01/01/2016', Thru: '12/31/2013', Size: '4,20,72', Programs: 'Total Joint Replacement; Care Coordination; Arthritis (Osteoarthritis & Rheumatoid)'},
  {name: 'Patient Satisfaction Survey PSQ-18', Effective: '01/01/2018', Thru: '12/31/2018', Size: '11,11,50', Programs: 'Disease Management; Care Coordination; Arthritis (Osteoarthritis & Rheumatoid)'},
  {name: 'The Patient Health Questionnaire (PHQ-9)', Effective: '01/01/2016', Thru: '12/31/2020', hra:'HRA', Size: '1,5,10,0', Programs: 'Care Coordination; Disease Management; C-SNP - Chronic Heart Failure'},
  {name: 'PHQ-9', Effective: '01/01/2016', Thru: '12/31/2017', Size: '5,44,195', Programs: 'care Coordination; Wellness; Diabetes;Mellitus'},
];

@Component({
  selector: 'plx-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss']
})
export class AssessmentsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'Effective', 'Thru', 'hra', 'Size', 'Programs'];

  @ViewChild(MatTable, { read: ElementRef }) private matTableRef: ElementRef;
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private renderer: Renderer2) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onResizeEnd(event: ResizeEvent, columnName): void {
		if (event.edges.right) {
			const cssValue = event.rectangle.width + 'px';
			const columnElts = document.getElementsByClassName('mat-column-' + columnName);
			for (let i = 0; i < columnElts.length; i++) {
				const currentEl = columnElts[i] as HTMLDivElement;
				currentEl.style.width = cssValue;
			}
		}
  }
  selectRow(index){
    console.log(index)
  }

}
