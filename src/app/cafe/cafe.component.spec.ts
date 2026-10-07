import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { CafeComponent } from './cafe.component';
import { Cafe, TipoCafe } from './cafe';
import { environment } from '../../environments/environment';

describe('CafeComponent', () => {
  let component: CafeComponent;
  let fixture: ComponentFixture<CafeComponent>;
  let httpMock: HttpTestingController;

  const tresCafes: Cafe[] = [
    new Cafe(1, 'Café 1', TipoCafe.Origen, 'Región 1', 'Cítrico', 1800, 'cafe-1.png'),
    new Cafe(2, 'Café 2', TipoCafe.Blend, 'Región 2', 'Caramelo', 1700, 'cafe-2.png'),
    new Cafe(3, 'Café 3', TipoCafe.Origen, 'Región 3', 'Cacao', 1920, 'cafe-3.png'),
  ];

  /** Runs ngOnInit, answers the service's request and re-renders. */
  function cargar(cafes: Cafe[]): void {
    fixture.detectChanges();
    httpMock.expectOne(environment.baseUrl).flush(cafes);
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(CafeComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    cargar([]);
    expect(component).toBeTruthy();
  });

  it('should render a table with three rows plus the header', () => {
    cargar(tresCafes);

    const headerRows = fixture.debugElement.queryAll(By.css('table thead tr'));
    expect(headerRows.length).toBe(1);
    expect(headerRows[0].queryAll(By.css('th')).length).toBe(4);

    const bodyRows = fixture.debugElement.queryAll(By.css('table tbody tr'));
    expect(bodyRows.length).toBe(3);
  });

  it('should render the name, type and region of each cafe', () => {
    cargar(tresCafes);

    const celdas = fixture.debugElement
      .queryAll(By.css('table tbody tr'))[0]
      .queryAll(By.css('td'))
      .map(celda => (celda.nativeElement as HTMLElement).textContent?.trim());

    expect(celdas).toEqual(['1', 'Café 1', TipoCafe.Origen, 'Región 1']);
  });

  it('should count the cafes of each type', () => {
    cargar(tresCafes);

    expect(component.totalOrigen).toBe(2);
    expect(component.totalBlend).toBe(1);

    const parrafos = fixture.debugElement
      .queryAll(By.css('p'))
      .map(parrafo => (parrafo.nativeElement as HTMLElement).textContent?.trim());

    expect(parrafos).toEqual(['Total café de origen: 2', 'Total café blend: 1']);
  });

  it('should show an empty-state row when the service returns no cafes', () => {
    cargar([]);

    const bodyRows = fixture.debugElement.queryAll(By.css('table tbody tr'));
    expect(bodyRows.length).toBe(1);
    expect((bodyRows[0].nativeElement as HTMLElement).textContent).toContain('No hay cafés disponibles');
  });
});
