import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ShopProductsComponent } from "./shop-products.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ShopProductsComponent", () => {

  let fixture: ComponentFixture<ShopProductsComponent>;
  let component: ShopProductsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ShopProductsComponent]
    });

    fixture = TestBed.createComponent(ShopProductsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
