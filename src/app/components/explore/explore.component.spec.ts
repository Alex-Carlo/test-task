import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ExploreComponent } from "./explore.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ExploreComponent", () => {

  let fixture: ComponentFixture<ExploreComponent>;
  let component: ExploreComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ExploreComponent]
    });

    fixture = TestBed.createComponent(ExploreComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
