import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CafeService } from './cafe.service';
import { Cafe, TipoCafe } from './cafe';
import { environment } from '../../environments/environment';

describe('CafeService', () => {
  let service: CafeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CafeService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CafeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET the cafes from the configured url', () => {
    const cafes: Cafe[] = [
      new Cafe(1, 'Café 1', TipoCafe.Origen, 'Región 1', 'Cítrico', 1800, 'cafe-1.png'),
      new Cafe(2, 'Café 2', TipoCafe.Blend, 'Región 2', 'Caramelo', 1700, 'cafe-2.png'),
      new Cafe(3, 'Café 3', TipoCafe.Origen, 'Región 3', 'Cacao', 1920, 'cafe-3.png'),
    ];

    let recibidos: Cafe[] | undefined;
    service.getCafes().subscribe(respuesta => (recibidos = respuesta));

    const req = httpMock.expectOne(environment.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(cafes);

    expect(recibidos).toEqual(cafes);
  });
});
