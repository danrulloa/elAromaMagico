import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CafeComponent } from './cafe.component';
import { By } from '@angular/platform-browser';

describe('CafeComponent', () => {
  let component: CafeComponent;
  let fixture: ComponentFixture<CafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('should render a table with three rows plus the header', () => {
  component.cafes = [
    { id: '1', nombre: 'Café 1', tipo: 'Café de Origen', region: 'Región 1' },
    { id: '2', nombre: 'Café 2', tipo: 'Blend', region: 'Región 2' },
    { id: '3', nombre: 'Café 3', tipo: 'Café de Origen', region: 'Región 3' },
  ];
  fixture.detectChanges();

  const tableRows = fixture.debugElement.queryAll(By.css('table tbody tr'));
  expect(tableRows.length).toBe(3);
});
});