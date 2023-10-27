import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CardProductComponent } from "./card-product.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CardProductComponent", () => {

  let fixture: ComponentFixture<CardProductComponent>;
  let component: CardProductComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CardProductComponent]
    });

    fixture = TestBed.createComponent(CardProductComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
