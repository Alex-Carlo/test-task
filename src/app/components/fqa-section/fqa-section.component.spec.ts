import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FqaSectionComponent } from "./fqa-section.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FqaSectionComponent", () => {

  let fixture: ComponentFixture<FqaSectionComponent>;
  let component: FqaSectionComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FqaSectionComponent]
    });

    fixture = TestBed.createComponent(FqaSectionComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
