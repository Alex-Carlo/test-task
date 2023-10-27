import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FilterBarComponent } from "./filter-bar.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FilterBarComponent", () => {

  let fixture: ComponentFixture<FilterBarComponent>;
  let component: FilterBarComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FilterBarComponent]
    });

    fixture = TestBed.createComponent(FilterBarComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
