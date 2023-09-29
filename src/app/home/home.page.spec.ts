import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*it("debería sumar dos números", () => {
    component.add(7,5);
    expect(component.result).toEqual(12);
  });*/
  it("deberia sumar dos numeros",() => {
    expect(component.add(1,2)).toEqual(3);
  })

  it("deberia sumar dos numeros",() => {
    expect(component.subtract(1,2)).toEqual(3);
  })

  it("deberia sumar dos numeros",() => {
    expect(component.multiply(1,2)).toEqual(3);
  })

  it("deberia sumar dos numeros",() => {
    expect(component.divide(1,2)).toEqual(3);
  })
});
