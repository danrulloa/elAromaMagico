import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CafeComponent } from './cafe.component';
import { Cafe } from './cafe';
import { By } from '@angular/platform-browser';

describe('CafeComponent', () => {
  let component: CafeComponent;
  let fixture: ComponentFixture<CafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
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
    new Cafe(1, 'Café 1', 'Café de Origen', 'Región 1', 'Cítrico', 1800, 'cafe-1.png'),
    new Cafe(2, 'Café 2', 'Blend', 'Región 2', 'Caramelo', 1700, 'cafe-2.png'),
    new Cafe(3, 'Café 3', 'Café de Origen', 'Región 3', 'Cacao', 1920, 'cafe-3.png'),
  ];
  fixture.detectChanges();

  const tableRows = fixture.debugElement.queryAll(By.css('table tbody tr'));
  expect(tableRows.length).toBe(3);
});
});